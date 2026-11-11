import type { PluginObject } from 'vuepress'

import { classifyNoteHeading } from '../shared/note-types.ts'

export const noteHeadingsPlugin: PluginObject = {
  name: 'youth-notes:note-headings',
  extendsMarkdown(markdown) {
    markdown.core.ruler.after('inline', 'youth-note-headings', (state) => {
      for (const [index, token] of state.tokens.entries()) {
        const inline = state.tokens[index + 1]
        if (token.type !== 'heading_open' || !/^h[2-6]$/.test(token.tag) || inline?.type !== 'inline') continue

        const type = classifyNoteHeading(inline.content)
        if (type) {
          token.attrJoin('class', `note-heading note-heading--${type}`)
          token.attrSet('data-note-type', type)
          // Wrap the visible marker without rewriting inline.content or its text.
          // VuePress can still generate exactly the same heading slug and TOC.
          const first = inline.children?.[0]
          const marker = first?.type === 'text' && /^【(知识点|考点|坑点)】/.exec(first.content)
          if (first && marker) {
            const open = new state.Token('html_inline', '', 0)
            open.content = '<span class="note-type-label">'
            const label = new state.Token('text', '', 0)
            label.content = marker[0]
            const close = new state.Token('html_inline', '', 0)
            close.content = '</span>'
            first.content = first.content.slice(marker[0].length)
            inline.children!.unshift(open, label, close)
          }
        }
      }
    })
  },
}
