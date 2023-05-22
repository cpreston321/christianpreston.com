<script setup lang="ts">
const props = defineProps({
  context: Object
})

function handleInput (token: string) {
  props.context?.node.input(token)
}
</script>

<template>
  <NuxtTurnstile v-model="props.context._value" @update:modelValue="handleInput" />
</template>
