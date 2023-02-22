<script lang="ts" setup>
const { y: scrollY } = useWindowScroll()
const { x, y } = useMouse({
  touch: false
})

const cords = computed(() => {
  return {
    x: x.value - 30,
    y: y.value - scrollY.value - 30
  }
})
</script>

<template>
  <Blob
    class="w-20! h-20! bg-teal animate-none fixed z-9 opacity-90 blur-xl"
    :style="{ top: `${cords.y}px`, left: `${cords.x}px` }"
  />

  <!-- Header -->
  <Header />

  <!-- Main Content -->
  <BgWrapper>
    <slot />
  </BgWrapper>

  <!-- Footer  -->
  <Footer />
</template>

<style>
.__nuxt {
  position: relative;
}
</style>
