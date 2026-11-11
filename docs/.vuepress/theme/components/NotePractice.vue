<script setup lang="ts">
import { computed, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, ref, useId, useSlots, watch } from 'vue'
import { hasPracticeContent, practiceChoices, practiceError, singleResult } from '../../shared/note-practice'

const props = withDefaults(defineProps<{
  mode: 'single' | 'self'
  title?: string
  answer?: string
  choices?: string
}>(), { title: '专项练习', choices: 'A,B,C,D' })
const slots = useSlots()
const id = useId()
const container = ref<HTMLElement>()
const hintPanel = ref<HTMLDetailsElement>()
const answerPanel = ref<HTMLDetailsElement>()
const selected = ref('')
const submitted = ref('')
const draft = ref('')
const selfCheck = ref('')
const options = computed(() => practiceChoices(props.choices))
function configurationError() {
  // Call slot functions during render, not setup/computed: preserve Vue's slot
  // dependency tracking and reject empty answers/options before judging.
  return practiceError(props.mode, options.value, props.answer,
    Object.keys(slots).filter(name => hasPracticeContent(slots[name]?.())))
}
const result = computed(() => singleResult(submitted.value, props.answer || '', options.value))
watch(selected, () => { submitted.value = '' })

function clear() {
  selected.value = ''
  submitted.value = ''
  draft.value = ''
  selfCheck.value = ''
  if (hintPanel.value) hintPanel.value.open = false
  if (answerPanel.value) answerPanel.value.open = false
}
async function reset() {
  clear()
  await nextTick()
  container.value?.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea')?.focus({ preventScroll: true })
}
function compare() {
  if (answerPanel.value) {
    answerPanel.value.open = true
    answerPanel.value.querySelector('summary')?.focus({ preventScroll: true })
  }
}
watch(() => [props.mode, props.title, props.answer, props.choices], clear)
// Cover both Vue page caching and native browser back/forward cache. No draft
// survives leaving this page, and a hash-only TOC jump must not reset answers.
onDeactivated(clear)
onActivated(clear)
function restore(event: PageTransitionEvent) {
  if (event.persisted) clear()
}
onMounted(() => {
  window.addEventListener('pagehide', clear)
  window.addEventListener('pageshow', restore)
})
onBeforeUnmount(() => {
  window.removeEventListener('pagehide', clear)
  window.removeEventListener('pageshow', restore)
})
</script>

<template>
  <section ref="container" class="note-practice" :data-mode="mode" :aria-labelledby="`${id}-title`">
    <div class="note-practice-header">
      <p :id="`${id}-title`" class="note-practice-title">{{ title }}</p>
      <span class="note-practice-kind">{{ mode === 'single' ? '单选' : '开放题 · 自查' }}</span>
    </div>
    <div class="note-practice-question"><slot /></div>
    <p v-if="configurationError()" class="note-practice-error" role="alert">练习配置待修正：{{ configurationError() }}</p>
    <template v-else>
      <fieldset v-if="mode === 'single'" class="note-practice-options" :aria-describedby="`${id}-feedback`">
        <legend>选择一个答案，再提交判断</legend>
        <div v-for="choice in options" :key="choice" class="note-practice-option" :class="{ 'is-selected': selected === choice }">
          <input :id="`${id}-${choice}`" v-model="selected" type="radio" :name="id" :value="choice" :aria-labelledby="`${id}-text-${choice}`">
          <label :id="`${id}-text-${choice}`" :for="`${id}-${choice}`" class="note-practice-option-text">
            <span class="note-practice-option-key">选项 {{ choice }}</span>
            <slot :name="`option-${choice.toLowerCase()}`" />
          </label>
        </div>
      </fieldset>
      <div v-else class="note-practice-draft">
        <label :for="`${id}-draft`">我的思路（本页草稿）</label>
        <textarea :id="`${id}-draft`" v-model="draft" rows="3" maxlength="5000" placeholder="先在纸上作答，或在这里写下思路；系统不自动评分。" />
        <button type="button" @click="compare">对照答案自查</button>
      </div>
      <div v-if="mode === 'single'" class="note-practice-actions">
        <button type="button" class="note-practice-submit" :disabled="!selected" @click="submitted = selected">提交答案</button>
        <button type="button" class="note-practice-reset" @click="reset">重做本题</button>
      </div>
      <p v-if="mode === 'single'" :id="`${id}-feedback`" class="note-practice-feedback" :data-result="result" role="status" aria-live="polite" aria-atomic="true">
        <template v-if="result === 'correct'">✓ 回答正确。再看解析，确认方法与条件。</template>
        <template v-else-if="result === 'incorrect'">还不正确。可以查看提示或解析，改选后再次提交。</template>
        <template v-else>{{ selected ? `已选择 ${selected}，提交后查看判断。` : '先独立尝试，选择后提交。' }}</template>
      </p>
      <details v-if="slots.hint" ref="hintPanel" class="note-practice-disclosure">
        <summary>查看提示</summary>
        <div><slot name="hint" /></div>
      </details>
      <details ref="answerPanel" class="note-practice-disclosure note-practice-answer">
        <summary>查看答案与解析</summary>
        <div><slot name="answer" /></div>
        <div v-if="mode === 'self'" class="note-practice-self-check">
          <p>对照条件、过程和结果自行判断；系统不会自动评分。</p>
          <button type="button" :aria-pressed="selfCheck === 'understood'" @click="selfCheck = 'understood'">已理解</button>
          <button type="button" :aria-pressed="selfCheck === 'revisit'" @click="selfCheck = 'revisit'">还需练习</button>
          <p role="status">{{ selfCheck === 'understood' ? '你已标记“已理解”（仅本页）。' : selfCheck === 'revisit' ? '你已标记“还需练习”（仅本页）。' : '尚未标记自查结果。' }}</p>
        </div>
      </details>
      <button v-if="mode === 'self'" type="button" class="note-practice-reset" @click="reset">重做本题</button>
      <p class="note-practice-notice">作答仅在本页临时保留 · 答案公开</p>
    </template>
  </section>
</template>
