<script lang="ts" setup>
const { x, y } = useMouse();
const { y: scrollY } = useWindowScroll();

const newY = computed(() => {
  return y.value - scrollY.value - 30;
});
const newX = computed(() => {
  return x.value - 30;
});
</script>

<template>
  <Html lang="en-US">
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <Blob
      class="w-15! h-15! bg-teal animate-none fixed z-9 opacity-90 blur-lg"
      :style="{ top: `${newY}px`, left: `${newX}px` }"
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
