<script lang="ts" setup>
const { x, y } = useMouse()
const { y: scrollY } = useWindowScroll()

const cords = computed(() => {
  return {
    x: x.value - 30,
    y: y.value - scrollY.value - 30
  }
})
</script>

<template>
  <Html lang="en-US">
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <Blob
      class="w-15! h-15! bg-teal animate-none fixed z-9 opacity-90 blur-lg"
      :style="{ top: `${cords.y}px`, left: `${cords.x}px` }"
    />

    <!-- Header -->
    <Header />

    <BgWrapper>
      <!-- Main Content -->
      <slot />
    </BgWrapper>

    <!-- Footer  -->
    <Footer />
  </Html>
</template>

<style>
.__nuxt {
  position: relative;
}
</style>
