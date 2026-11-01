import { defineCollection, defineCollections } from 'vuepress-theme-plume'
import { mathJuniorSidebar } from './math-junior-sidebar'

// 每个学科、每个学段独立维护目录、面包屑和前后篇导航。
export const subjects = [
  { dir: 'chinese', title: '语文' },
  { dir: 'math', title: '数学' },
  { dir: 'english', title: '英语' },
  { dir: 'physics', title: '物理' },
  { dir: 'chemistry', title: '化学' },
  { dir: 'biology', title: '生物' },
  { dir: 'geography', title: '地理' },
  { dir: 'history', title: '历史' },
  { dir: 'politics', title: '道德与法治 / 思想政治' },
]

export const stages = [
  { dir: 'junior', title: '初中' },
  { dir: 'senior', title: '高中' },
] as const

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
