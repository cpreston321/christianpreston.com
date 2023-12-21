<script lang="ts" setup>
interface TitleProps {
  hideBack?: boolean
}
withDefaults(defineProps<TitleProps>(), {
  hideBack: false,
})

const router = useRouter()
function handleBack() {
  return router.push('/')
}
</script>

<template>
  <div class="mb-4 flex flex-row md:mb-6">
    <div
      v-if="!hideBack"
      class="mr-3 cursor-pointer self-center text-xl md:text-4xl hover:opacity-70"
      @click="handleBack"
    >
      <IconCSS name="eva:arrow-back-fill" />
    </div>
    <h1 class="self-center text-3xl font-bold md:text-6xl sm:text-5xl">
      <slot />
    </h1>
  </div>
</template>
