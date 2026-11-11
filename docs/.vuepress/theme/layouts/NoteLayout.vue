<script setup lang="ts">
import { Layout } from 'vuepress-theme-plume/client'
import { computed } from 'vue'
import { usePageData } from 'vuepress/client'
import { subjects } from '../../shared/subject-catalog'
import NoteRecords from '../components/NoteRecords.vue'

const page = usePageData()
const collectionLabel = computed(() => {
  const match = /^\/notes\/([^/]+)\/(junior|senior|shared)\//.exec(page.value.path)
  if (!match) return '共笔手册'
  const subject = subjects.find(item => item.dir === match[1])
  const stage = { junior: '初中', senior: '高中', shared: '跨学段' }[match[2]]
  return `${stage}${subject?.title || ''}`
})
</script>

<template>
  <Layout>
    <template #doc-title-before>
      <p class="note-overline"><span lang="en">YOUTHNOTES</span><span>{{ collectionLabel }}</span></p>
    </template>
    <template #doc-content-after>
      <NoteRecords />
    </template>
  </Layout>
</template>
