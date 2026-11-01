import type { PluginObject } from 'vuepress'

const headingTypes: Record<string, string> = {
  知识点: 'knowledge',
  考点: 'exam',
  坑点: 'pitfall',
}

export const noteHeadingsPlugin: PluginObject = {
  name: 'youth-notes:note-headings',
  extendsMarkdown(markdown) {
    markdown.core.ruler.after('inline', 'youth-note-headings', (state) => {
      for (const [index, token] of state.tokens.entries()) {
        const inline = state.tokens[index + 1]
        if (token.type !== 'heading_open' || token.tag !== 'h2' || inline?.type !== 'inline') continue

        const category = /^【(知识点|考点|坑点)】/.exec(inline.content.trimStart())?.[1]
        if (category) {
          const type = headingTypes[category]
          token.attrJoin('class', `note-heading note-heading--${type}`)
          token.attrSet('data-note-type', type)
        }
      }
    })
  },
}
