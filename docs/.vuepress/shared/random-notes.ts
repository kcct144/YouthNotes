import { publicSubjects } from './subject-catalog.ts'

export interface RandomNote {
  path: string
  title: string
  subject: string
  stage: string
  excerpt: string
  image?: string
  imageAlt?: string
}

interface NoteSource {
  path: string
  title: string
  filePathRelative: string | null
  content: string
  contentRendered: string
  frontmatter: Record<string, unknown>
}

function plainText(html: string): string {
  const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }
  return html.replace(/<[^>]+>/g, '')
    .replace(/&(#\d+|#x[\da-f]+|amp|lt|gt|quot|apos|nbsp);/gi, (entity, name: string) => {
      if (!name.startsWith('#')) return entities[name.toLowerCase()] || entity
      const code = Number.parseInt(name.slice(name[1].toLowerCase() === 'x' ? 2 : 1), name[1].toLowerCase() === 'x' ? 16 : 10)
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity
    }).replace(/\s+/g, ' ').trim()
}

/** Reuse actual introductory prose, never navigation, answers or rendered TeX. */
export function createRandomNote(source: NoteSource): RandomNote | undefined {
  const file = source.filePathRelative?.replace(/\\/g, '/') || ''
  const match = /^notes\/([^/]+)\/(junior|senior|shared)\/(.+\.md)$/.exec(file)
  const subject = publicSubjects.find(item => item.dir === match?.[1])
  if (!match || !subject || /(?:^|\/)README\.md$/i.test(file) || source.frontmatter.draft === true) return undefined

  const visible = source.contentRendered
    .replace(/<!--[^]*?-->/g, '')
    .replace(/<(nav|details|template)\b[^]*?<\/\1>/gi, '')
  const paragraphs = [...visible.matchAll(/<p\b[^>]*>([^]*?)<\/p>/gi)]
  if (/^待共建/.test(plainText(paragraphs[0]?.[1] || ''))) return undefined
  const excerpt = paragraphs
    .filter(([, html]) => !/class=["'][^"']*katex|<img\b|<svg\b/i.test(html))
    .map(([, html]) => plainText(html))
    .find(text => text.length >= 12 && !/^待共建/.test(text))
  if (!excerpt) return undefined

  const body = source.content.replace(/<(nav|details|template)\b[^]*?<\/\1>/gi, '').replace(/<!--[^]*?-->/g, '')
  const image = /!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^]*?["'])?\)/.exec(body)
  return {
    path: source.path,
    title: source.title,
    subject: subject.title,
    stage: { junior: '初中', senior: '高中', shared: '跨学段' }[match[2]]!,
    excerpt: Array.from(excerpt).length > 140 ? `${Array.from(excerpt).slice(0, 140).join('')}…` : excerpt,
    image: image?.[2],
    imageAlt: image?.[1],
  }
}

/** Uniform selection; a deliberate shuffle avoids immediately repeating a note. */
export function pickRandomNote(notes: readonly RandomNote[], currentPath?: string, random = Math.random): RandomNote | undefined {
  const choices = currentPath && notes.length > 1 ? notes.filter(note => note.path !== currentPath) : notes
  return choices[Math.floor(random() * choices.length)]
}
