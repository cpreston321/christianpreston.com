<script lang="ts" setup>
const { x, y } = useMouse();
</script>

<template>
  <Html lang="en-US">
    <Blob
      class="w-15! h-15! bg-teal animate-none fixed z-9 opacity-90 blur-lg"
      :style="{ top: y - 30 + 'px', left: x - 30 + 'px' }"
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
