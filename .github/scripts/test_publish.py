"""Local filesystem tests; never contact a server or invoke publisher main()."""
import hashlib
import io
import os
from pathlib import Path
import tarfile
import tempfile
import unittest
from unittest.mock import patch

import publish


class PublishTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(dir=os.environ.get('RUNNER_TEMP') or os.environ.get('TMPDIR'))
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.state = self.root / publish.STATE
        self.state.mkdir(mode=0o700)
        (self.root / 'index.html').write_text('old', encoding='utf-8')
        (self.root / 'old-assets').mkdir()
        (self.root / 'old-assets/a.js').write_text('old js', encoding='utf-8')

    def package(self, release='100-1', entries=None):
        directory = self.state / release
        directory.mkdir()
        archive = directory / 'site.tar'
        entries = entries or {'index.html': b'new', 'assets/a.js': b'new js'}
        with tarfile.open(archive, 'w') as tar:
            for name, content in entries.items():
                info = tarfile.TarInfo(name)
                info.size = len(content)
                tar.addfile(info, io.BytesIO(content))
        return hashlib.sha256(archive.read_bytes()).hexdigest()

    def deploy(self, release='100-1', sequence=1, digest=None):
        publish.publish(self.root, release, sequence, 'a' * 40, digest or self.package(release))

    def test_success_and_backup(self):
        self.deploy()
        self.assertEqual((self.root / 'index.html').read_text(), 'new')
        self.assertTrue((self.root / 'assets/a.js').is_file())
        self.assertFalse((self.root / 'old-assets').exists())
        self.assertEqual((self.state / '100-1/old/index.html').read_text(), 'old')
        self.assertFalse((self.state / 'active.json').exists())
        self.assertEqual(publish.read(self.state / 'current.json')['sequence'], 1)

    def test_stale_sequence_is_noop(self):
        self.deploy(sequence=9)
        self.deploy(release='101-1', sequence=8)
        self.assertEqual(publish.read(self.state / 'current.json')['sequence'], 9)
        self.assertFalse((self.state / '101-1/old').exists())

    def test_checksum_failure_keeps_live(self):
        self.package()
        with self.assertRaisesRegex(RuntimeError, 'checksum'):
            self.deploy(digest='0' * 64)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')

    def test_reject_traversal_before_switch(self):
        digest = self.package(entries={'../escape': b'bad'})
        with self.assertRaisesRegex(RuntimeError, 'Unsafe'):
            self.deploy(digest=digest)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')
        self.assertFalse((self.root / 'escape').exists())

    def test_missing_index_keeps_live(self):
        digest = self.package(entries={'dist/index.html': b'bad nesting'})
        with self.assertRaisesRegex(RuntimeError, 'index.html'):
            self.deploy(digest=digest)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')

    def test_switch_failure_restores_all_old_files(self):
        digest = self.package()
        rename = Path.rename

        def fail_new_index(source, target):
            if source == self.state / '100-1/new/index.html':
                raise PermissionError('injected failure')
            return rename(source, target)

        with patch.object(Path, 'rename', fail_new_index):
            with self.assertRaises(PermissionError):
                self.deploy(digest=digest)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')
        self.assertTrue((self.root / 'old-assets/a.js').exists())
        self.assertFalse((self.root / 'assets').exists())
        self.assertFalse((self.state / 'active.json').exists())
        self.assertFalse((self.state / 'current.json').exists())

    def test_reject_symlink_archive(self):
        directory = self.state / '100-1'
        directory.mkdir()
        archive = directory / 'site.tar'
        with tarfile.open(archive, 'w') as tar:
            info = tarfile.TarInfo('index.html')
            info.type = tarfile.SYMTYPE
            info.linkname = '/etc/passwd'
            tar.addfile(info)
        digest = hashlib.sha256(archive.read_bytes()).hexdigest()
        with self.assertRaisesRegex(RuntimeError, 'Unsafe'):
            self.deploy(digest=digest)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')

    def test_recover_mid_switch(self):
        self.package()
        release = self.state / '100-1'
        (release / 'old').mkdir()
        (release / 'new').mkdir()
        (release / 'new/index.html').write_text('new', encoding='utf-8')
        transaction = {'release': '100-1', 'moves': [
            ['old', 'index.html'], ['old', 'old-assets'], ['new', 'index.html']]}
        (self.root / 'index.html').rename(release / 'old/index.html')
        (self.root / 'old-assets').rename(release / 'old/old-assets')
        (release / 'new/index.html').rename(self.root / 'index.html')
        publish.save(self.state / 'active.json', transaction)
        publish.undo(self.root, self.state, transaction)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')
        self.assertTrue((self.root / 'old-assets/a.js').is_file())
        self.assertEqual((release / 'new/index.html').read_text(), 'new')

    def interrupt_at_commit(self, after):
        digest = self.package()
        save = publish.save

        def interrupted_save(path, value):
            if path == self.state / 'current.json':
                if after:
                    save(path, value)
                raise RuntimeError('injected signal at commit boundary')
            save(path, value)

        with patch.object(publish, 'save', interrupted_save):
            with self.assertRaisesRegex(RuntimeError, 'injected signal'):
                self.deploy(digest=digest)

    def test_signal_before_commit_restores_old_site(self):
        self.interrupt_at_commit(after=False)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')
        self.assertFalse((self.state / 'current.json').exists())
        self.assertFalse((self.state / 'active.json').exists())

    def test_signal_after_commit_never_rolls_back_new_site(self):
        self.interrupt_at_commit(after=True)
        self.assertEqual((self.root / 'index.html').read_text(), 'new')
        self.assertEqual(publish.read(self.state / 'current.json')['sequence'], 1)
        self.assertTrue((self.state / 'active.json').exists())
        publish.recover(self.root)
        self.assertFalse((self.state / 'active.json').exists())
        self.assertEqual((self.root / 'index.html').read_text(), 'new')
        self.assertEqual((self.state / '100-1/old/index.html').read_text(), 'old')

    def test_committed_recovery_refuses_changed_scene(self):
        self.interrupt_at_commit(after=True)
        (self.root / 'index.html').unlink()
        with self.assertRaisesRegex(RuntimeError, 'scene changed'):
            publish.recover(self.root)
        self.assertTrue((self.state / 'active.json').exists())
        self.assertTrue((self.state / '100-1/old/index.html').exists())

    def test_unfinished_transaction_blocks_publish(self):
        publish.save(self.state / 'active.json', {'release': '99-1', 'moves': []})
        with self.assertRaisesRegex(RuntimeError, 'Unfinished'):
            self.deploy()
        self.assertEqual((self.root / 'index.html').read_text(), 'old')

    def test_recover_intent_before_failed_rename(self):
        (self.state / '99-1/old').mkdir(parents=True)
        (self.state / '99-1/new').mkdir()
        transaction = {'release': '99-1', 'moves': [['old', 'index.html']]}
        publish.save(self.state / 'active.json', transaction)
        publish.undo(self.root, self.state, transaction)
        self.assertEqual((self.root / 'index.html').read_text(), 'old')


if __name__ == '__main__':
    unittest.main()
