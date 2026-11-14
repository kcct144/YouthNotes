import { defineNavbarConfig } from 'vuepress-theme-plume'
import { stages, publicSubjectsFor } from './shared/subject-catalog'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  ...stages.map(({ dir: stage, title: stageTitle }) => ({
    text: `${stageTitle}笔记`,
    items: publicSubjectsFor(stage).map(({ dir, title }) => ({
      text: title,
      link: `/notes/${dir}/${stage}/`,
    })),
  })),
  { text: '学习方法', link: '/methods/' },
  { text: '共建指南', link: '/guide/' },
])
