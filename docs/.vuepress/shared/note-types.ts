export const noteTypes = {
  知识点: { type: 'knowledge' },
  考点: { type: 'exam' },
  坑点: { type: 'pitfall' },
} as const

export type NoteType = typeof noteTypes[keyof typeof noteTypes]['type']

/** Classification is independent of heading depth. Do not rewrite inline text/ids. */
export function classifyNoteHeading(text: string): NoteType | undefined {
  const category = /^【(知识点|考点|坑点)】/.exec(text.trimStart())?.[1] as keyof typeof noteTypes | undefined
  return category ? noteTypes[category].type : undefined
}

export function outlineTargetId(href: string): string | undefined {
  if (!href.startsWith('#') || href.length === 1) return undefined
  try {
    return decodeURIComponent(href.slice(1))
  }
  catch {
    return undefined
  }
}
