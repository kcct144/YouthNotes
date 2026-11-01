<script setup lang="ts">
import type { NoteContributor } from '../../shared/note-records.ts'

defineProps<{ contributors: NoteContributor[] }>()
</script>

<template>
  <section class="note-record-card note-contributors" aria-label="贡献者名单">
    <header class="note-record-header">
      <h2>贡献者名单</h2>
      <span v-if="contributors.length" class="note-record-count">{{ contributors.length }} 位</span>
    </header>
    <ul v-if="contributors.length" class="note-contributor-list">
      <li v-for="person in contributors" :key="person.name">
        <span class="note-contributor-mark" aria-hidden="true">{{ Array.from(person.name)[0] }}</span>
        <div>
          <strong class="note-contributor-name">{{ person.name }}</strong>
          <p>{{ person.contribution }}</p>
        </div>
      </li>
    </ul>
    <p v-else class="note-record-empty">尚未填写贡献者名单。</p>
  </section>
</template>
