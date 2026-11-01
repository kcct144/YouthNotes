import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { noteHeadingsPlugin } from './plugins/note-headings'
import { noteRecordsPlugin } from './plugins/note-records'

// 尚未配置远程仓库时不生成编辑链接。部署参数见 docs/guide/maintenance.md。
const docsRepo = process.env.DOCS_REPO
const docsBranch = process.env.DOCS_BRANCH || 'master'
const base = process.env.DOCS_BASE || '/'
if (!/^\/(?:[^?#]*\/)?$/.test(base)) {
  throw new Error('DOCS_BASE 必须以 / 开头和结尾，例如 /YouthNotes/')
}

export default defineUserConfig({
  base: base as '/' | `/${string}/`,
  lang: 'zh-CN',
  title: '青春共笔',
  description: '师生共同编写的初高中学科笔记与学习方法 Wiki',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }]],
  bundler: viteBundler(),
  shouldPrefetch: false,
  plugins: [noteHeadingsPlugin, noteRecordsPlugin],
  theme: plumeTheme({
    // 使用文件路径作为网址，避免启动或构建时自动改写学生的 Markdown。
    autoFrontmatter: false,
    docsRepo,
    docsDir: 'docs',
    docsBranch,
    editLink: Boolean(docsRepo),
    // 内容贡献与代录分开记录，使用文章自身的共建记录。
    lastUpdated: false,
    contributors: false,
    changelog: false,
    plugins: { git: false },
    search: { provider: 'local' },
    markdown: {
      math: { type: 'katex', mhchem: true, copy: true },
      mermaid: true,
      echarts: true,
      table: true,
      collapse: true,
      image: { figure: true, lazyload: true, size: true },
      imageSize: 'local',
    },
  }),
})
