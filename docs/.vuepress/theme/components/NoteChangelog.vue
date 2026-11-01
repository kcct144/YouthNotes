<script setup lang="ts">
import { computed } from 'vue'
import { sortNoteChanges, type NoteChange } from '../../shared/note-records.ts'
import NoteChangeEntry from './NoteChangeEntry.vue'

const props = defineProps<{ changes: NoteChange[] }>()
const entries = computed(() => sortNoteChanges(props.changes))
const recent = computed(() => entries.value.slice(0, 5))
const earlier = computed(() => entries.value.slice(5))
</script>

<template>
  <section class="note-record-card note-changelog" aria-label="修改记录">
    <header class="note-record-header">
      <h2>修改记录</h2>
      <span v-if="entries.length" class="note-record-count">{{ entries.length }} 条</span>
    </header>
    <template v-if="entries.length">
      <ol class="note-change-list">
        <NoteChangeEntry v-for="(entry, index) in recent" :key="index" :entry="entry" />
      </ol>
      <details v-if="earlier.length" class="note-earlier-changes">
        <summary>展开其余 {{ earlier.length }} 条记录</summary>
        <ol class="note-change-list">
          <NoteChangeEntry v-for="(entry, index) in earlier" :key="index" :entry="entry" />
        </ol>
      </details>
    </template>
    <p v-else class="note-record-empty">尚未填写修改记录。</p>
  </section>
</template>
