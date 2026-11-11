import { stat } from 'node:fs/promises'
import { dirname, isAbsolute, relative, resolve } from 'node:path'
import type { App, Page, PluginObject } from 'vuepress'
import { createRandomNote } from '../shared/random-notes.ts'

async function localPreviewImage(app: App, page: Page, image?: string): Promise<string | undefined> {
  if (!image || !page.filePath || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(image)) return undefined
  let source: string
  try { source = decodeURIComponent(image.split(/[?#]/, 1)[0]) }
  catch { return undefined }
  if (!/\.(?:svg|png|jpe?g|webp|avif)$/i.test(source)) return undefined
  const file = source.startsWith('/') ? resolve(app.dir.source(), `.${source}`) : resolve(dirname(page.filePath), source)
  const withinDocs = relative(app.dir.source(), file)
  if (withinDocs.startsWith('..') || isAbsolute(withinDocs)) return undefined
  try { return (await stat(file)).isFile() ? file.replace(/\\/g, '/') : undefined }
  catch { return undefined }
}

async function writeCatalog(app: App, pages: Page[]) {
  const candidates = pages.map(page => ({ page, note: createRandomNote(page) }))
    .filter(item => item.note !== undefined).sort((a, b) => a.note!.path.localeCompare(b.note!.path))
  const rows = await Promise.all(candidates.map(async ({ page, note }, index) => {
    const image = await localPreviewImage(app, page, note!.image)
    const { image: _source, ...metadata } = note!
    return {
      import: image ? `import image${index} from ${JSON.stringify(image)};` : '',
      entry: `{...${JSON.stringify(metadata)}, image: ${image ? `image${index}` : 'undefined'}}`,
    }
  }))
  // Only small preview metadata and bundled asset URLs reach the browser.
  await app.writeTemp('random-notes.js', `${rows.map(row => row.import).join('\n')}\nexport default [${rows.map(row => row.entry).join(',\n')}];\n`)
}

export const randomNotesPlugin: PluginObject = {
  name: 'youth-notes:random-notes',
  onPrepared: app => writeCatalog(app, app.pages),
  onPageUpdated(app, _type, page, previous) {
    const file = (page || previous)?.filePath
    return writeCatalog(app, [...app.pages.filter(item => item.filePath !== file), ...(page ? [page] : [])])
  },
}
