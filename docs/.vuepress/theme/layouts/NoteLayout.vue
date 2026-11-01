<script setup lang="ts">
import { Layout } from 'vuepress-theme-plume/client'
import NoteRecords from '../components/NoteRecords.vue'
</script>

<template>
  <Layout>
    <template #doc-content-after>
      <NoteRecords />
    </template>
  </Layout>
</template>
