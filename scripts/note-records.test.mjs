import assert from 'node:assert/strict'
import test from 'node:test'
import { sortNoteChanges, validateNoteRecords } from '../docs/.vuepress/shared/note-records.ts'
import { noteRecordsPlugin } from '../docs/.vuepress/plugins/note-records.ts'

const contributor = { name: '测试昵称', contribution: '提供反例。' }
const change = {
  date: '2026-10-31',
  summary: '补充反例与解释。',
  contributors: ['测试昵称'],
  recordedBy: '测试代录人',
}

test('学生的内容贡献与未列入名单的代录人可以分别记录', () => {
  assert.deepEqual(validateNoteRecords({ noteContributors: [contributor], noteChanges: [change] }), [])
  assert.deepEqual(validateNoteRecords({
    noteContributors: [{ ...contributor, contribution: '提供反例。\n补充解释。\n' }],
    noteChanges: [{ ...change, summary: '补充反例。\n说明判断方法。\n' }],
  }), [])
})

test('暂无或未启用记录时不要求虚构贡献者', () => {
  assert.deepEqual(validateNoteRecords({}), [])
  assert.deepEqual(validateNoteRecords({ noteContributors: [], noteChanges: [] }), [])
})

test('构建插件拒绝无效记录，并指出问题文章', () => {
  assert.throws(() => noteRecordsPlugin.extendsPage({
    filePathRelative: 'notes/example.md',
    frontmatter: { noteContributors: [], noteChanges: [change] },
  }), error => error.message.includes('notes/example.md') && error.message.includes('未列入 noteContributors'))
})

test('修改记录中的实际贡献者必须出现在名单中', () => {
  const errors = validateNoteRecords({ noteContributors: [], noteChanges: [change] })
  assert.ok(errors.some(error => error.includes('未列入 noteContributors')))
})

test('日历日期有效性包含月长和闰年', () => {
  for (const date of ['2026-02-30', '2026-02-29', '2026-13-01', '2026-2-01']) {
    const errors = validateNoteRecords({ noteContributors: [contributor], noteChanges: [{ ...change, date }] })
    assert.ok(errors.some(error => error.includes('.date')), date)
  }
  assert.deepEqual(validateNoteRecords({
    noteContributors: [contributor], noteChanges: [{ ...change, date: '2024-02-29' }],
  }), [])
})

test('拒绝重复昵称、空贡献和缺少实际贡献者的记录', () => {
  assert.ok(validateNoteRecords({ noteContributors: [contributor, contributor] }).length)
  assert.ok(validateNoteRecords({ noteContributors: [{ ...contributor, contribution: '' }] }).length)
  assert.ok(validateNoteRecords({ noteChanges: [{ ...change, contributors: [] }] }).length)
})

test('历史按日期倒序且同日顺序稳定，不改写原始资料', () => {
  const entries = [
    { ...change, date: '2026-10-28', summary: '较早记录' },
    { ...change, summary: '同日第一条' },
    { ...change, summary: '同日第二条' },
  ]
  const original = structuredClone(entries)
  assert.deepEqual(sortNoteChanges(entries).map(entry => entry.summary), ['同日第一条', '同日第二条', '较早记录'])
  assert.deepEqual(entries, original)
})
