import assert from 'node:assert/strict'
import test from 'node:test'
import MarkdownIt from 'markdown-it'
import { createMarkdown } from 'vuepress/markdown'
import { readFileSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import ts from 'typescript'
import { parse, compileScript } from 'vue/compiler-sfc'
import { Comment, Fragment, Static, createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { noteHeadingsPlugin } from '../docs/.vuepress/plugins/note-headings.ts'
import { classifyNoteHeading, outlineTargetId, noteTypes } from '../docs/.vuepress/shared/note-types.ts'
import { hasPracticeContent, practiceChoices, practiceError, singleResult } from '../docs/.vuepress/shared/note-practice.ts'

function markdown(typed) {
  const md = new MarkdownIt()
  md.core.ruler.after('inline', 'test-anchor', state => {
    for (const token of state.tokens) {
      if (token.type === 'heading_open') { token.attrSet('id', `stable-${token.tag}`); token.attrJoin('class', 'original') }
    }
  })
  if (typed) noteHeadingsPlugin.extendsMarkdown(md)
  return md
}

test('分类与等级解耦：h2–h6支持每一类，h1/普通标题不变，原文与锚点不变', () => {
  for (const category of Object.keys(noteTypes)) {
    const source = Array.from({ length: 6 }, (_, i) => `${'#'.repeat(i + 1)} 【${category}】原文 **强调**`).join('\n\n')
    const base = markdown(false).parse(source, {})
    const typed = markdown(true).parse(source, {})
    for (let i = 0; i < typed.length; i++) {
      const token = typed[i]
      assert.equal(token.content, base[i].content)
      if (token.type !== 'heading_open') continue
      assert.equal(token.attrGet('id'), base[i].attrGet('id'))
      assert.ok(token.attrGet('class').includes('original'))
      assert.equal(token.attrGet('data-note-type'), token.tag === 'h1' ? null : noteTypes[category].type)
    }
  }
  assert.equal(markdown(true).render('### 普通标题'), markdown(false).render('### 普通标题'))
  assert.equal(classifyNoteHeading('解释【考点】'), undefined)
  assert.equal(classifyNoteHeading('  【考点】子考点'), 'exam')
})

test('真实VuePress Markdown锚点链：h2–h6各类型自动锚点和标题文字与未分类渲染一致', () => {
  const source = Array.from({ length: 5 }, (_, i) => Object.keys(noteTypes).map(category => `${'#'.repeat(i + 2)} 【${category}】层级${i + 2}`).join('\n\n')).join('\n\n')
  const base = createMarkdown()
  const typed = createMarkdown()
  noteHeadingsPlugin.extendsMarkdown(typed)
  const html = typed.render(source)
  const original = base.render(source)
  const ids = markup => [...markup.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
  const text = markup => markup.replace(/<[^>]*>/g, '')
  assert.deepEqual(ids(html), ids(original))
  assert.equal(ids(html).length, 15)
  assert.equal(text(html), text(original))
  assert.equal((html.match(/data-note-type=/g) || []).length, 15)
})

test('目录目标解析兼容中文/原锚点，并安全忽略坏转义与外链', () => {
  assert.equal(outlineTargetId('#%E7%9F%A5%E8%AF%86'), '知识')
  assert.equal(outlineTargetId('#definition'), 'definition')
  for (const href of ['#%', '#', '/page/#definition', '']) assert.equal(outlineTargetId(href), undefined)
})

test('练习配置拒绝缺解析、重复/缺失选项和未知题型，不虚构开放题评分', () => {
  const options = practiceChoices('A,B,C,D')
  const slots = ['default', 'answer', 'option-a', 'option-b', 'option-c', 'option-d']
  assert.equal(practiceError('single', options, 'B', slots), undefined)
  assert.equal(practiceError('self', [], undefined, ['default', 'answer']), undefined)
  for (const args of [
    ['multiple', options, 'B', slots], ['single', options, 'E', slots],
    ['single', ['A', 'A'], 'A', slots], ['single', options, 'B', ['default', 'answer']],
    ['self', [], undefined, ['default']],
  ]) assert.ok(practiceError(...args))
  assert.equal(singleResult('', 'B', options), 'unanswered')
  assert.equal(singleResult('X', 'B', options), 'unanswered')
  assert.equal(singleResult('A', 'B', options), 'incorrect')
  assert.equal(singleResult('B', 'B', options), 'correct')
})

// Compile the actual SFC with the project's installed Vue/TypeScript. No new test
// dependency or alternate question markup. Browser tests exercise interactions.
async function component() {
  const file = resolve('docs/.vuepress/theme/components/NotePractice.vue')
  const { descriptor } = parse(readFileSync(file, 'utf8'), { filename: file })
  const compiled = compileScript(descriptor, { id: 'note-practice-test', inlineTemplate: true })
  const source = compiled.content.replace('../../shared/note-practice', pathToFileURL(resolve('docs/.vuepress/shared/note-practice.ts')).href)
  const code = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
  mkdirSync('.tmp', { recursive: true })
  const dir = mkdtempSync(resolve('.tmp/practice-test-'))
  try {
    const target = resolve(dir, 'component.mjs')
    writeFileSync(target, code)
    return (await import(pathToFileURL(target).href)).default
  }
  finally { rmSync(dir, { recursive: true, force: true }) }
}

test('实际Vue组件SSR：单选语义/独立ID、开放题无自动评分、错误配置可见', async () => {
  const Practice = await component()
  const slots = { default: () => h('p', '原创题干'), answer: () => h('p', '完整解析'), 'option-a': () => '甲', 'option-b': () => '乙' }
  const html = await renderToString(createSSRApp({ render: () => h('main', [
    h(Practice, { mode: 'single', choices: 'A,B', answer: 'B' }, slots),
    h(Practice, { mode: 'self' }, slots),
    h(Practice, { mode: 'single', choices: 'A,B', answer: 'C' }, slots),
  ]) }))
  assert.equal((html.match(/type="radio"/g) || []).length, 2)
  assert.ok(html.includes('<fieldset'))
  assert.ok(html.includes('aria-live="polite"'))
  assert.ok(html.includes('<textarea'))
  assert.ok(html.includes('系统不会自动评分'))
  assert.ok(html.includes('练习配置待修正'))
  assert.ok(html.includes('重做本题'))
  assert.ok(!html.includes('localStorage'))
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length)
})

test('空题干/选项/解析不会生成可评分radio；评论、空白、空HTML不算内容', async () => {
  for (const content of [undefined, '', '  ', h(Comment, 'comment'), h('p'), h(Fragment, [h(Comment), ' ']), h(Static, '<p> </p>')])
    assert.equal(hasPracticeContent(content), false)
  assert.equal(hasPracticeContent(h('img', { src: 'diagram.svg', alt: '图' })), true)
  assert.equal(hasPracticeContent(h(Static, '<span class="katex">x</span>')), true)
  const Practice = await component()
  const good = { default: () => '题干', answer: () => '解析', 'option-a': () => '甲', 'option-b': () => '乙' }
  for (const name of ['default', 'answer', 'option-a']) {
    const html = await renderToString(createSSRApp({ render: () => h(Practice,
      { mode: 'single', choices: 'A,B', answer: 'B' }, { ...good, [name]: () => [h(Comment), ' '] }) }))
    assert.ok(html.includes('练习配置待修正'), name)
    assert.ok(!html.includes('type="radio"'), name)
  }
})
