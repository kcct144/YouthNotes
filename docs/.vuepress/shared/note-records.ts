export interface NoteContributor {
  name: string
  contribution: string
}

export interface NoteChange {
  date: string
  summary: string
  contributors: string[]
  recordedBy?: string
}

export interface NoteRecordsFrontmatter {
  [key: string]: unknown
  noteContributors?: NoteContributor[]
  noteChanges?: NoteChange[]
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isText(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isName(value: unknown): value is string {
  return isText(value) && value === value.trim()
}

function isDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T00:00:00Z`)
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}

/** 同时用于命令行检查和 VuePress 构建，防止记录格式或署名遗漏。 */
export function validateNoteRecords(frontmatter: Record<string, unknown>): string[] {
  const errors: string[] = []
  const names = new Set<string>()
  const contributors = frontmatter.noteContributors
  const changes = frontmatter.noteChanges

  if (contributors !== undefined && !Array.isArray(contributors)) {
    errors.push('noteContributors 必须是列表；暂无贡献者时填写 []')
  }
  else if (Array.isArray(contributors)) {
    contributors.forEach((person: unknown, index: number) => {
      const location = `noteContributors[${index + 1}]`
      if (!isObject(person)) {
        errors.push(`${location} 必须包含 name 和 contribution`)
        return
      }
      if (!isName(person.name)) errors.push(`${location}.name 必须是非空昵称，首尾不留空格`)
      else if (names.has(person.name)) errors.push(`${location}.name 重复：${person.name}，请合并该人的贡献说明`)
      else names.add(person.name)
      if (!isText(person.contribution)) errors.push(`${location}.contribution 必须说明实际贡献`)
    })
  }

  if (changes !== undefined && !Array.isArray(changes)) {
    errors.push('noteChanges 必须是列表；暂无修改记录时填写 []')
  }
  else if (Array.isArray(changes)) {
    changes.forEach((change: unknown, index: number) => {
      const location = `noteChanges[${index + 1}]`
      if (!isObject(change)) {
        errors.push(`${location} 必须包含 date、summary 和 contributors`)
        return
      }
      if (!isDate(change.date)) errors.push(`${location}.date 必须是带引号的真实日期，例如 '2026-10-31'`)
      if (!isText(change.summary)) errors.push(`${location}.summary 必须说明修改了什么`)
      if (!Array.isArray(change.contributors) || change.contributors.length === 0) {
        errors.push(`${location}.contributors 至少填写一位实际内容贡献者`)
      }
      else {
        const participants = new Set<string>()
        change.contributors.forEach((name: unknown) => {
          if (!isName(name)) errors.push(`${location}.contributors 必须填写非空昵称，首尾不留空格`)
          else if (!names.has(name)) errors.push(`${location} 的贡献者“${name}”未列入 noteContributors`)
          else if (participants.has(name)) errors.push(`${location}.contributors 重复：${name}`)
          else participants.add(name)
        })
      }
      if (change.recordedBy !== undefined && !isName(change.recordedBy)) {
        errors.push(`${location}.recordedBy 若填写，必须是非空昵称`)
      }
    })
  }
  return errors
}

/** 日期为 YYYY-MM-DD，直接比较可避免时区转换，并保持同一天的原有顺序。 */
export function sortNoteChanges(changes: readonly NoteChange[]): NoteChange[] {
  return [...changes].sort((a, b) => b.date.localeCompare(a.date))
}
