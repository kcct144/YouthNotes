import assert from 'node:assert/strict'
import test from 'node:test'
import { existsSync, readFileSync } from 'node:fs'
import MarkdownIt from 'markdown-it'
import { publicSubjectDirs, publicSubjects, stages, subjects } from '../docs/.vuepress/shared/subject-catalog.ts'

const root = new URL('../', import.meta.url)
const read = path => readFileSync(new URL(path, root), 'utf8')
const expectedDirs = ['math', 'physics', 'chemistry', 'english']

test('公开入口独立限定四科及顺序；完整内容科目与存量学段首页保留', () => {
  assert.deepEqual([...publicSubjectDirs], expectedDirs)
  assert.deepEqual(publicSubjects.map(subject => subject.title), ['数学', '物理', '化学', '英语'])
  assert.deepEqual(subjects.map(subject => subject.dir), ['chinese', 'math', 'english', 'physics', 'chemistry', 'biology', 'geography', 'history', 'politics'])
  for (const { dir } of subjects) {
    for (const stage of stages) assert.ok(existsSync(new URL(`docs/notes/${dir}/${stage.dir}/README.md`, root)), `${dir}/${stage.dir}`)
  }
  const collections = read('docs/.vuepress/collections.ts')
  assert.ok(collections.includes('...subjects.flatMap('))
  assert.ok(collections.includes('...subjects.map('))
  assert.ok(!collections.includes('publicSubjects.flatMap('))
  const navbar = read('docs/.vuepress/navbar.ts')
  assert.ok(navbar.includes('items: publicSubjects.map('))
  assert.ok(navbar.includes('`/notes/${dir}/${stage}/`'))
})

test('首页两组八个独立入口直达学段学科，语义标签与顺序一致，没有大hero', () => {
  const source = read('docs/README.md')
  assert.ok(!source.includes('type: hero'))
  const groups = [...source.matchAll(/<nav class="home-subjects" aria-label="([^"]+)">([\s\S]*?)<\/nav>/g)]
  assert.equal(groups.length, 2)
  let count = 0
  groups.forEach((group, index) => {
    assert.equal(group[1], `${stages[index].title}学科入口`)
    const links = [...group[2].matchAll(/<a href="([^"]+)" aria-label="([^"]+)">/g)]
    assert.equal(links.length, 4)
    assert.deepEqual(links.map(link => link[1]), expectedDirs.map(dir => `/notes/${dir}/${stages[index].dir}/`))
    assert.deepEqual(links.map(link => link[2]), publicSubjects.map(subject => `${stages[index].title}${subject.title}`))
    count += links.length
  })
  assert.equal(count, 8)
})

test('学科目录与首页均只列四科直达链接，不宣传九科维护', () => {
  const parser = new MarkdownIt()
  const tokens = parser.parse(read('docs/notes/README.md'), {})
  const links = tokens.flatMap(token => token.children || []).filter(token => token.type === 'link_open').map(token => token.attrGet('href'))
  const subjectsInIndex = links.filter(href => /\/\w+\/(junior|senior)\/README\.md$/.test(href))
  assert.deepEqual(subjectsInIndex, expectedDirs.flatMap(dir => stages.map(stage => `./${dir}/${stage.dir}/README.md`)))
  assert.ok(read('README.md').includes('当前公开入口聚焦数学、物理、化学、英语'))
  assert.ok(!read('README.md').includes('覆盖语文、数学'))
})
