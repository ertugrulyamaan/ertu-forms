<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { validateValue } from '../utils/validation'
import { applyMask } from '../utils/masking'

const props = defineProps<{
  modelValue: string
  rules?: Record<string, any>
  messages?: Record<string, string>
  mask?: string | ((val: string) => string)
  inputClass?: string
  errorClass?: string
  type?: string
}>()

const emit = defineEmits(['update:modelValue'])

const rawValue = ref(props.modelValue || '')
const errorMessage = ref('')

const displayValue = computed(() => {
  return props.mask ? applyMask(rawValue.value, props.mask) : rawValue.value
})

function onInput(e: Event) {
  const input = e.target as HTMLInputElement
  const value = input.value
  rawValue.value = value
  emit('update:modelValue', rawValue.value)
}

function validate() {
  if (!props.rules) return
  const result = validateValue(rawValue.value, props.rules, props.messages)
  errorMessage.value = result || ''
}

watch(() => props.modelValue, (val) => {
  rawValue.value = val
})
</script>

<template>
  <input
    :type="props.type || 'text'"
    :value="displayValue"
    @input="onInput"
    @blur="validate"
    :class="[props.inputClass, { 'input-error': errorMessage }]"
  />
  <p v-if="errorMessage" :class="[props.errorClass || 'error-text']">{{ errorMessage }}</p>
</template>



<style scoped>
.input-error {
  border-color: red;
}
.error-text {
  color: red;
  font-size: 0.8rem;
}
</style>