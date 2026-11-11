import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

export default defineThemeConfig({
  logo: '/logo.svg',
  appearance: true,
  outline: [2, 3],
  sidebarMenuLabel: '文章目录',
  outlineLabel: '此页内容',
  createTime: false,
  navbar,
  collections,
  footer: { message: '青春共笔 · YouthNotes　/　一起把知识讲明白。' },
})
