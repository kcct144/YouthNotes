<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vuepress/client'
import notes from '@temp/random-notes'
import { pickRandomNote, type RandomNote } from '../../shared/random-notes'

// Keep SSR/hydration deterministic; randomize only after the desktop is known.
const note = ref<RandomNote | undefined>(notes[0])
const desktop = ref(false)
let media: MediaQueryList | undefined

function shuffle() {
  note.value = pickRandomNote(notes, note.value?.path)
}
function syncViewport() {
  const wasDesktop = desktop.value
  desktop.value = Boolean(media?.matches)
  if (desktop.value && !wasDesktop) note.value = pickRandomNote(notes)
}
onMounted(() => {
  media = window.matchMedia('(min-width: 700px)')
  syncViewport()
  media.addEventListener('change', syncViewport)
})
onBeforeUnmount(() => media?.removeEventListener('change', syncViewport))
</script>

<template>
  <aside v-if="note" class="home-sample" aria-label="随机笔记">
    <div class="home-sample-top"><span>随机翻一页</span><span>{{ note.subject }} / {{ note.stage }}</span></div>
    <h2 class="home-sample-title" aria-live="polite" aria-atomic="true">{{ note.title }}</h2>
    <div v-if="desktop && note.image" class="home-sample-figure">
      <img :key="note.path" :src="note.image" :alt="note.imageAlt || note.title" loading="lazy" decoding="async">
    </div>
    <p class="home-sample-caption">{{ note.excerpt }}</p>
    <div class="home-sample-actions">
      <RouteLink class="home-sample-link" :to="withBase(note.path)" :aria-label="`阅读笔记：${note.title}`">阅读这篇笔记</RouteLink>
      <button type="button" class="home-sample-shuffle" :disabled="notes.length < 2" @click="shuffle">换一篇</button>
    </div>
  </aside>
</template>
