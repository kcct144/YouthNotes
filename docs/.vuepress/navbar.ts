import { defineNavbarConfig } from 'vuepress-theme-plume'
import { stages, subjects } from './collections'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  ...stages.map(({ dir: stage, title: stageTitle }) => ({
    text: `${stageTitle}笔记`,
    items: subjects.map(({ dir, title }) => ({
      text: dir === 'politics' ? (stage === 'junior' ? '道德与法治' : '思想政治') : title,
      link: `/notes/${dir}/${stage}/`,
    })),
  })),
  { text: '学习方法', link: '/methods/' },
  { text: '共建指南', link: '/guide/' },
])
