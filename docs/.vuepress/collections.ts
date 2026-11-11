import { defineCollection, defineCollections } from 'vuepress-theme-plume'
import { mathJuniorSidebar } from './math-junior-sidebar'
import { stages, subjects } from './shared/subject-catalog'

// Do not filter content collections when reducing public navigation.
export { stages, subjects, publicSubjects } from './shared/subject-catalog'

export function subjectStageTitle(dir: string, title: string, stage: 'junior' | 'senior') {
  if (dir === 'politics') return stage === 'junior' ? '初中道德与法治' : '高中思想政治'
  return `${stage === 'junior' ? '初中' : '高中'}${title}`
}

export default defineCollections([
  ...subjects.flatMap(({ dir, title }) => stages.map(({ dir: stage }) => defineCollection({
    type: 'doc',
    dir: `notes/${dir}/${stage}`,
    linkPrefix: `/notes/${dir}/${stage}/`,
    title: subjectStageTitle(dir, title, stage),
    sidebar: dir === 'math' && stage === 'junior' ? mathJuniorSidebar : 'auto',
  }))),
  // 跨学段内容单独成册，避免混入初中或高中的目录。
  ...subjects.map(({ dir, title }) => defineCollection({
    type: 'doc',
    dir: `notes/${dir}/shared`,
    linkPrefix: `/notes/${dir}/shared/`,
    title: `跨学段${title}`,
    sidebar: 'auto',
  })),
  defineCollection({
    type: 'doc', dir: 'methods', linkPrefix: '/methods/',
    title: '学习方法', sidebar: 'auto',
  }),
  defineCollection({
    type: 'doc', dir: 'guide', linkPrefix: '/guide/', title: '共建指南',
    sidebar: ['', 'quickstart', 'writing', 'math-and-charts', 'contributions', 'collaboration', 'ai-skills', 'maintenance'],
  }),
])
