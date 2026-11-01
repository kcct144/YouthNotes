<script setup lang="ts">
import { computed } from 'vue'
import { usePageFrontmatter } from 'vuepress/client'
import type { NoteRecordsFrontmatter } from '../../shared/note-records.ts'
import NoteChangelog from './NoteChangelog.vue'
import NoteContributors from './NoteContributors.vue'

const frontmatter = usePageFrontmatter<NoteRecordsFrontmatter>()
const enabled = computed(() => frontmatter.value.noteContributors !== undefined || frontmatter.value.noteChanges !== undefined)
</script>

<template>
  <aside v-if="enabled" id="note-records" class="note-records" aria-label="文章共建记录">
    <NoteContributors :contributors="frontmatter.noteContributors || []" />
    <NoteChangelog :changes="frontmatter.noteChanges || []" />
  </aside>
</template>
