<script setup lang="ts">
const props = defineProps({
  context: Object as PropType<{
    _value: string
    node: {
      input: (token: string) => void
    }
  }>,
})

function handleInput(token: string) {
  props.context?.node.input(token)
}
</script>

<template>
  <NuxtTurnstile v-model="props.context!._value" @update:model-value="handleInput" />
</template>
