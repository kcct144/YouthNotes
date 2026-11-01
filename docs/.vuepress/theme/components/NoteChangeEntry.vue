<script setup lang="ts">
import type { NoteChange } from '../../shared/note-records.ts'

defineProps<{ entry: NoteChange }>()
</script>

<template>
  <li class="note-change-entry">
    <time :datetime="entry.date">{{ entry.date }}</time>
    <p class="note-change-summary">{{ entry.summary }}</p>
    <p class="note-change-people">内容贡献：{{ entry.contributors.join('、') }}</p>
    <p v-if="entry.recordedBy" class="note-change-people">代录：{{ entry.recordedBy }}</p>
  </li>
</template>
