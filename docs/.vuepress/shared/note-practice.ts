import { Comment, Fragment, Static, Text, isVNode, type VNodeChild } from 'vue'

export type PracticeMode = 'single' | 'self'

/** Ignore comments/whitespace/empty wrappers, but accept images and rendered math. */
export function hasPracticeContent(node: VNodeChild): boolean {
  if (Array.isArray(node)) return node.some(hasPracticeContent)
  if (typeof node === 'string') return Boolean(node.trim())
  if (typeof node === 'number') return true
  if (!isVNode(node) || node.type === Comment) return false
  if (node.type === Text || node.type === Fragment) return hasPracticeContent(node.children as VNodeChild)
  if (node.type === Static) {
    const html = String(node.children || '').replace(/<!--[\s\S]*?-->/g, '')
    return Boolean(html.replace(/<[^>]*>/g, '').replace(/&nbsp;|\u00a0/g, '').trim()) || /<(?:img|svg|math|canvas|video|audio)\b/i.test(html)
  }
  if (typeof node.type !== 'string') return true // Opaque Vue components render their own content.
  if (['img', 'svg', 'math', 'canvas', 'video', 'audio'].includes(node.type)) return true
  return hasPracticeContent(node.children as VNodeChild)
}

export function practiceChoices(choices: string): string[] {
  return choices.split(',').map(choice => choice.trim()).filter(Boolean)
}

/** A malformed exercise must never present invented correctness feedback. */
export function practiceError(mode: string, choices: string[], answer: string | undefined, slots: string[]): string | undefined {
  if (!['single', 'self'].includes(mode)) return 'mode 只支持 single 或 self。'
  if (!slots.includes('default') || !slots.includes('answer')) return '请填写题干及 answer 答案解析插槽。'
  if (mode === 'self') return undefined
  if (choices.length < 2 || choices.length > 6 || choices.some(choice => !/^[A-Z]$/.test(choice)) || new Set(choices).size !== choices.length)
    return 'choices 应为 2–6 个不重复的大写字母，以逗号分隔。'
  if (!answer || !choices.includes(answer)) return 'answer 必须是 choices 中的一个选项字母。'
  if (choices.some(choice => !slots.includes(`option-${choice.toLowerCase()}`))) return '请为每个选项填写对应的 option-a 等插槽。'
  return undefined
}

export function singleResult(selected: string, answer: string, choices: string[]): 'unanswered' | 'correct' | 'incorrect' {
  if (!choices.includes(selected)) return 'unanswered'
  return selected === answer ? 'correct' : 'incorrect'
}
