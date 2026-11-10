"""Server-side, stdlib-only publisher. Invoked over verified SSH, never locally by CI.

Keep the document root (which may be a container bind mount) in place.
Top-level renames are recoverable, but are NOT an atomic whole-site switch.
"""
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import signal
import sys
import tarfile

ROOT = Path('/opt/1panel/apps/openresty/openresty/www/sites/youthnotes/index')
STATE = '.youthnotes-deploy'


def save(path, value):
    tmp = path.with_suffix('.tmp')
    with tmp.open('w', encoding='utf-8') as stream:
        json.dump(value, stream)
        stream.flush()
        os.fsync(stream.fileno())
    os.replace(tmp, path)


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def undo(root, state, transaction):
    release = state / transaction['release']
    # Each intent was persisted BEFORE the rename. A missing destination means
    # that intent did not execute (or has already been undone).
    for kind, name in reversed(transaction['moves']):
        source, target = ((release / 'old' / name, root / name) if kind == 'old'
                          else (root / name, release / 'new' / name))
        if kind == 'new' and target.exists():
            continue
        if kind == 'old' and not source.exists() and not source.is_symlink():
            continue
        if target.exists() or target.is_symlink():
            raise RuntimeError(f'Recovery collision: {target}; stop for manual inspection')
        source.rename(target)
    (state / 'active.json').unlink()
    print('Previous live files restored; failed release retained for inspection.')


def committed(state, release_id):
    current = state / 'current.json'
    return current.exists() and read(current)['release'] == release_id


def recover(root):
    state = root / STATE
    transaction = read(state / 'active.json')
    if committed(state, transaction['release']):
        # The current.json atomic replace is the commit point. Never undo it.
        # Refuse to clear the journal if a separate writer changed the scene.
        release = state / transaction['release']
        expected = {name for kind, name in transaction['moves'] if kind == 'new'}
        actual = {p.name for p in root.iterdir() if p.name != STATE}
        old = [name for kind, name in transaction['moves'] if kind == 'old']
        if (expected != actual or not (root / 'index.html').is_file() or
                any((release / 'new').iterdir()) or
                any(not (release / 'old' / name).exists() and
                    not (release / 'old' / name).is_symlink() for name in old)):
            raise RuntimeError('Committed transaction scene changed; stop for manual inspection')
        (state / 'active.json').unlink()
        print('Publication already committed; verified scene and cleared transaction marker.')
    else:
        undo(root, state, transaction)


def publish(root, release_id, sequence, commit, digest):
    state = root / STATE
    if (state / 'active.json').exists():
        raise RuntimeError('Unfinished transaction: run recover after inspection; no live changes made')
    current_path = state / 'current.json'
    if current_path.exists() and sequence <= read(current_path)['sequence']:
        print('Skipping stale/repeated workflow sequence; newer release already recorded.')
        return
    release = state / release_id
    archive = release / 'site.tar'
    if hashlib.sha256(archive.read_bytes()).hexdigest() != digest:
        raise RuntimeError('Archive checksum mismatch')
    stage = release / 'new'
    stage.mkdir(mode=0o755)
    with tarfile.open(archive) as tar:
        members = tar.getmembers()
        for member in members:
            name = PurePosixPath(member.name)
            if (name.is_absolute() or '..' in name.parts or
                    (name.parts and name.parts[0] == STATE) or
                    not (member.isfile() or member.isdir())):
                raise RuntimeError(f'Unsafe archive entry: {member.name}')
        # No links/devices; force public read/traverse regardless of runner umask.
        for member in members:
            member.mode = 0o755 if member.isdir() else 0o644
            member.uid = member.gid = 0
            member.uname = member.gname = ''
        tar.extractall(stage, members=members, numeric_owner=False)
    if not (stage / 'index.html').is_file():
        raise RuntimeError('Missing top-level index.html; refusing publication')
    old = release / 'old'
    old.mkdir(mode=0o700)
    previous = sorted(p.name for p in root.iterdir() if p.name != STATE)
    upcoming = sorted(p.name for p in stage.iterdir())
    # Renaming immediate children needs rights on root, not ownership of their
    # contents. Sticky bit, mount points, ACLs or immutable flags may still block.
    if root.stat().st_mode & 0o1000:
        raise RuntimeError('Document root has sticky bit; administrator must review permissions')
    transaction = {'release': release_id, 'moves': [], 'commit': commit}
    save(state / 'active.json', transaction)
    try:
        for kind, names, source, target in (
                ('old', previous, root, old), ('new', upcoming, stage, root)):
            for name in names:
                transaction['moves'].append([kind, name])
                save(state / 'active.json', transaction)
                (source / name).rename(target / name)
        if not (root / 'index.html').is_file():
            raise RuntimeError('Post-switch index.html missing')
        save(current_path, {'sequence': sequence, 'release': release_id, 'commit': commit})
    except BaseException:
        # A signal can arrive immediately AFTER os.replace(current.json), even
        # before save() returns. Inspect the persisted commit point, not a local
        # boolean; never restore old files while retaining a new watermark.
        if committed(state, release_id):
            print('Publication committed; keeping new site and journal for recover mode.')
        else:
            undo(root, state, transaction)
        raise
    (state / 'active.json').unlink()
    archive.unlink()
    print(f'Published {commit}; previous site retained in {release}/old')


def main():
    import fcntl  # Linux server; no third-party packages.
    os.umask(0o022)
    if ROOT.is_symlink() or not ROOT.is_dir():
        raise RuntimeError('Expected real document root directory')
    state = ROOT / STATE
    if state.is_symlink() or not state.is_dir() or state.stat().st_uid != os.getuid():
        raise RuntimeError('Expected deployment-owned private state directory')
    state.chmod(0o700)
    # Server lock also protects against sessions surviving runner disconnects.
    with (state / 'lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        def interrupted(signum, frame):
            raise RuntimeError(f'Interrupted by signal {signum}')
        for sig in (signal.SIGTERM, signal.SIGINT, signal.SIGHUP):
            signal.signal(sig, interrupted)
        if sys.argv[1:] == ['recover']:
            recover(ROOT)
            return
        if len(sys.argv) != 6:
            raise RuntimeError('Expected release-id sequence commit sha256, or recover')
        _, mode, release, sequence, commit, digest = sys.argv
        if (mode != 'publish' or not re.fullmatch(r'[0-9]+-[0-9]+', release) or
                not sequence.isdigit() or not re.fullmatch(r'[0-9a-f]{40}', commit) or
                not re.fullmatch(r'[0-9a-f]{64}', digest)):
            raise RuntimeError('Invalid publication arguments')
        publish(ROOT, release, int(sequence), commit, digest)


if __name__ == '__main__':
    main()
