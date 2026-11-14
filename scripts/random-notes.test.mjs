import assert from 'node:assert/strict'
import test from 'node:test'
import { createRandomNote, pickRandomNote } from '../docs/.vuepress/shared/random-notes.ts'

function article(overrides = {}) {
  return {
    path: '/notes/math/junior/topic/', title: '主题名称',
    filePathRelative: 'notes/math/junior/topic/index.md', frontmatter: {},
    content: '这里是一段实际笔记的导语，说明本页研究的问题。',
    contentRendered: '<p>这里是一段实际笔记的导语，说明本页研究的问题。</p>',
    ...overrides,
  }
}

test('随机池仅收录公开入口科目的真实文章，排除目录、草稿与空占位页', () => {
  const note = createRandomNote(article())
  assert.equal(note.title, '主题名称')
  assert.equal(note.subject, '数学')
  assert.equal(note.stage, '初中')
  assert.equal(note.path, '/notes/math/junior/topic/')
  // 语文、地理仍不在公开入口内，语文没有公开学段。
  for (const filePathRelative of ['notes/math/junior/README.md', 'notes/chinese/junior/topic.md', 'notes/geography/senior/topic.md', 'guide/writing.md', null])
    assert.equal(createRandomNote(article({ filePathRelative })), undefined)
  assert.equal(createRandomNote(article({ frontmatter: { draft: true } })), undefined)
  assert.equal(createRandomNote(article({ contentRendered: '<p>待共建。请补充此处的学科内容。</p>' })), undefined)
  assert.equal(createRandomNote(article({ contentRendered: '<p>待共建。</p><p>请从所学内容出发补充一篇笔记，写清概念与条件。</p>' })), undefined)
  assert.equal(createRandomNote(article({ contentRendered: '' })), undefined)
  assert.equal(createRandomNote(article({ filePathRelative: 'notes/physics/senior/topic.md' })).stage, '高中')
  assert.equal(createRandomNote(article({ filePathRelative: 'notes/english/shared/topic.md' })).stage, '跨学段')
  // 学段专属入口同样进池：初中历史、高中生物。
  assert.equal(createRandomNote(article({ filePathRelative: 'notes/history/junior/topic.md' })).subject, '历史')
  assert.equal(createRandomNote(article({ filePathRelative: 'notes/biology/senior/topic.md' })).subject, '生物')
})

test('简介与配图取同一文章，忽略导航和折叠答案，并处理实体与中文截断', () => {
  const note = createRandomNote(article({
    contentRendered: '<nav><p>这是一段不应进入简介的目录文字。</p></nav><details><p>这是一段不应提前泄露的答案解析。</p></details><p><span class="katex">公式的重复文本</span></p><p>从<strong>同一篇文章</strong>读取 A &amp; B 的实际解释，不加入虚构简介。</p>',
    content: '<details>![答案图](./answer.svg)</details>\n![原文的概念图](./assets/diagram.svg)',
  }))
  assert.equal(note.excerpt, '从同一篇文章读取 A & B 的实际解释，不加入虚构简介。')
  assert.equal(note.image, './assets/diagram.svg')
  assert.equal(note.imageAlt, '原文的概念图')
  const long = createRandomNote(article({ contentRendered: `<p>${'说明𠮷'.repeat(80)}</p>` }))
  assert.equal(Array.from(long.excerpt).length, 141)
  assert.ok(!long.excerpt.includes('\uFFFD'))
})

test('换一篇不立即重复，初次选择覆盖全池，单篇和空池也可处理', () => {
  const notes = ['a', 'b', 'c'].map(path => ({ ...createRandomNote(article()), path }))
  assert.equal(pickRandomNote(notes, undefined, () => 0).path, 'a')
  assert.equal(pickRandomNote(notes, undefined, () => 0.999).path, 'c')
  assert.equal(pickRandomNote(notes, 'b', () => 0).path, 'a')
  assert.equal(pickRandomNote(notes, 'b', () => 0.999).path, 'c')
  assert.equal(pickRandomNote(notes.slice(0, 1), 'a', () => 0).path, 'a')
  assert.equal(pickRandomNote([], undefined, () => 0), undefined)
})
