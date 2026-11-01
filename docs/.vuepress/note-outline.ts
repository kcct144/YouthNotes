import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import { onContentUpdated } from 'vuepress/client'

function colorOutlineLinks() {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('a.outline-link')) {
    const href = link.getAttribute('href') || ''
    const heading = href.startsWith('#')
      ? document.getElementById(decodeURIComponent(href.slice(1)))
      : null
    const type = heading?.matches('h2.note-heading') ? heading.dataset.noteType : undefined
    if (type) link.dataset.noteType = type
    else delete link.dataset.noteType
  }
}

export function setupNoteOutline() {
  let observer: MutationObserver | undefined

  onContentUpdated(() => nextTick(colorOutlineLinks))
  onMounted(() => {
    colorOutlineLinks()
    // 下拉目录在展开后才挂载；仅在新目录项出现时同步，忽略其他内容变化。
    observer = new MutationObserver((mutations) => {
      const hasNewLinks = mutations.some(({ addedNodes }) => Array.from(addedNodes).some(node =>
        node instanceof Element && (node.matches('a.outline-link') || node.querySelector('a.outline-link')),
      ))
      if (hasNewLinks) colorOutlineLinks()
    })
    observer.observe(document.body, { childList: true, subtree: true })
  })
  onBeforeUnmount(() => observer?.disconnect())
}
