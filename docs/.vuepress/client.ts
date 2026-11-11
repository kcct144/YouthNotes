import { defineClientConfig } from 'vuepress/client'
import { setupNoteOutline } from './note-outline'
import NoteLayout from './theme/layouts/NoteLayout.vue'
import NotePractice from './theme/components/NotePractice.vue'
import HomeRandomNote from './theme/components/HomeRandomNote.vue'
import './theme/styles/subject-handbook.css'
import './theme/styles/custom.css'
import './theme/styles/note-records.css'
import './theme/styles/note-practice.css'
import './theme/styles/home.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('NotePractice', NotePractice)
    app.component('HomeRandomNote', HomeRandomNote)
  },
  layouts: { Layout: NoteLayout },
  setup() {
    setupNoteOutline()
  },
})
