<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { homeSlogans, pickHomeSlogan, type HomeSlogan } from '../../shared/home-slogans'

// 服务端渲染用固定一条，挂载后再随机，避免水合不一致。
const slogan = ref<HomeSlogan>(homeSlogans[0])

onMounted(() => {
  slogan.value = pickHomeSlogan(slogan.value.zh)
})
</script>

<template>
  <div class="home-slogan">
    <p class="home-slogan-zh">{{ slogan.zh }}</p>
    <p class="home-slogan-en" lang="en">{{ slogan.en }}</p>
    <p v-if="slogan.source" class="home-slogan-source">
      — {{ slogan.source }}<span v-if="slogan.sourceNote" class="home-slogan-note">（{{ slogan.sourceNote }}）</span>
    </p>
  </div>
</template>
