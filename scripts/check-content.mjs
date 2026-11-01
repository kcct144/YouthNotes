import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'
import { parse as parseYaml } from 'yaml'
import { validateNoteRecords } from '../docs/.vuepress/shared/note-records.ts'

const docsRoot = fileURLToPath(new URL('../docs/', import.meta.url))
const parser = new MarkdownIt({ html: true })
const errors = []
let chartCount = 0
let linkCount = 0

async function markdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const groups = await Promise.all(entries.map(async (entry) => {
    if (entry.name.startsWith('.')) return []
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return markdownFiles(fullPath)
    return entry.name.endsWith('.md') ? [fullPath] : []
  }))
  return groups.flat().sort()
}

function report(file, message) {
  errors.push(`${path.relative(docsRoot, file)}: ${message}`)
}

// 遍历时逐段匹配实际名称，使 Windows 上也能发现 Linux 构建会失败的大小写错误。
async function exactFile(file) {
  const relative = path.relative(docsRoot, file)
  if (relative.startsWith('..') || path.isAbsolute(relative)) return false
  let current = docsRoot
  try {
    for (const part of relative.split(path.sep).filter(Boolean)) {
      if (!(await readdir(current)).includes(part)) return false
      current = path.join(current, part)
    }
    return (await stat(current)).isFile()
  }
  catch {
    return false
  }
}

async function checkLink(file, href) {
  if (!href || /^(?:[a-z][a-z\d+.-]*:|\/\/|#|\?)/i.test(href)) return
  linkCount++
  let pathname
  try {
    pathname = decodeURIComponent(href.split(/[?#]/, 1)[0])
  }
  catch {
    report(file, `链接编码无效：${href}`)
    return
  }
  const target = pathname.startsWith('/')
    ? path.resolve(docsRoot, `.${pathname}`)
    : path.resolve(path.dirname(file), pathname)
  const candidates = [target]
  if (pathname.endsWith('/') || !path.extname(pathname)) {
    candidates.push(path.join(target, 'README.md'), path.join(target, 'index.md'), `${target}.md`)
  }
  if (pathname.endsWith('.html')) candidates.push(target.replace(/\.html$/, '.md'))
  if (pathname.startsWith('/')) {
    candidates.push(path.resolve(docsRoot, '.vuepress/public', `.${pathname}`))
  }
  if (!(await Promise.all(candidates.map(exactFile))).some(Boolean)) {
    report(file, `本地链接或图片不存在（含大小写检查）：${href}`)
  }
}

async function visitTokens(file, tokens) {
  for (const token of tokens) {
    if (token.type === 'link_open') await checkLink(file, token.attrGet('href'))
    if (token.type === 'image') await checkLink(file, token.attrGet('src'))
    if (token.type === 'fence' && token.info.trim().split(':', 1)[0] === 'echarts') {
      chartCount++
      try {
        const chart = JSON.parse(token.content)
        if (!chart || typeof chart !== 'object' || Array.isArray(chart)) {
          throw new Error('图表配置应为 JSON 对象')
        }
      }
      catch (error) {
        report(file, `ECharts JSON 无效：${error.message}`)
      }
    }
    if (token.children) await visitTokens(file, token.children)
  }
}

const files = await markdownFiles(docsRoot)
for (const file of files) {
  const source = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n')
  const frontmatter = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(source)
  if (!frontmatter) {
    report(file, '缺少 YAML frontmatter 与 title')
    continue
  }
  try {
    const data = parseYaml(frontmatter[1])
    if (typeof data?.title !== 'string' || !data.title.trim()) {
      report(file, 'title 必须是非空字符串')
    }
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      for (const error of validateNoteRecords(data)) report(file, error)
    }
  }
  catch (error) {
    report(file, `frontmatter 无效：${error.message}`)
  }
  await visitTokens(file, parser.parse(source.slice(frontmatter[0].length), {}))
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
else {
  console.log(`内容检查通过：${files.length} 个页面，${linkCount} 个本地引用，${chartCount} 个 ECharts 配置。`)
}
