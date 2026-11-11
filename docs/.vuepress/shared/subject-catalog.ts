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
export const publicSubjectDirs = ['math', 'physics', 'chemistry', 'english'] as const
export const publicSubjects = publicSubjectDirs.map(dir => subjects.find(subject => subject.dir === dir)!)

export const stages = [
  { dir: 'junior', title: '初中' },
  { dir: 'senior', title: '高中' },
] as const
