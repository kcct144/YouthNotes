import type { PluginObject } from 'vuepress'
import { validateNoteRecords } from '../shared/note-records.ts'

export const noteRecordsPlugin: PluginObject = {
  name: 'youth-notes:note-records',
  extendsPage(page) {
    const errors = validateNoteRecords(page.frontmatter)
    if (errors.length) {
      throw new Error(`${page.filePathRelative || page.path} 的贡献记录有误：\n${errors.join('\n')}`)
    }
  },
}
