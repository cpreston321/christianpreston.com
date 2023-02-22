<script lang="ts" setup>
interface TitleProps {
  hideBack?: boolean
}
withDefaults(defineProps<TitleProps>(), {
  hideBack: false
})

const router = useRouter()
const handleBack = () => {
  return router.push('/')
}
</script>

<template>
  <div class="flex flex-row mb-4 md:mb-6">
    <div
      v-if="!hideBack"
      class="self-center text-xl md:text-4xl hover:opacity-70 mr-3 cursor-pointer"
      @click="handleBack"
    >
      <IconCSS name="eva:arrow-back-fill" />
    </div>
    <h1 class="self-center font-bold text-3xl sm:text-5xl md:text-6xl">
      <slot />
    </h1>
  </div>
</template>
