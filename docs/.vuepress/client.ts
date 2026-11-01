import { defineClientConfig } from 'vuepress/client'
import { setupNoteOutline } from './note-outline'
import NoteLayout from './theme/layouts/NoteLayout.vue'
import './theme/styles/subject-handbook.css'
import './theme/styles/custom.css'
import './theme/styles/note-records.css'

export default defineClientConfig({
  layouts: { Layout: NoteLayout },
  setup() {
    setupNoteOutline()
  },
})
