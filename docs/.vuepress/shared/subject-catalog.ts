// Content collections retain every existing subject and historical URL.
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
] as const

// Public entry points are a separate, deliberately ordered subset.
// 两个学段各有自己的公开入口：初中加历史，高中加生物，互不连带。
export const publicStageSubjectDirs = {
  junior: ['math', 'physics', 'chemistry', 'english', 'history'],
  senior: ['math', 'physics', 'chemistry', 'english', 'biology'],
} as const

export type PublicStage = keyof typeof publicStageSubjectDirs

export function publicSubjectsFor(stage: PublicStage) {
  return publicStageSubjectDirs[stage].map(dir => subjects.find(subject => subject.dir === dir)!)
}

// 需要跨学段处理的场合（如首页随机池）使用两学段的并集。
export const publicSubjectDirs = [
  ...new Set([...publicStageSubjectDirs.junior, ...publicStageSubjectDirs.senior]),
]
export const publicSubjects = publicSubjectDirs.map(dir => subjects.find(subject => subject.dir === dir)!)

export const stages = [
  { dir: 'junior', title: '初中' },
  { dir: 'senior', title: '高中' },
] as const
