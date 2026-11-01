import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

export default defineThemeConfig({
  logo: '/logo.svg',
  appearance: true,
  createTime: false,
  navbar,
  collections,
  footer: { message: '青春共笔 · 一起理解知识，一起完善笔记' },
})
