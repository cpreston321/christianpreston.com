<script lang="ts" setup>
useSeoMeta({
  googleSiteVerification: 'sRar0M0gLALXwyv7ycuIFXRlG4e2Sly_RQNESdxZlgs',
})

const { x, y } = useMouse({
  touch: false,
  type: 'client',
})

const cords = computed(() => {
  return {
    x: x.value - 40,
    y: y.value - 40,
  }
})
</script>

<template>
  <Blob
    id="cursor-blob"
    class="animate-cursor-blob fixed z-9 blur-xl h-20! w-20!"
    :style="{ top: `${cords.y}px`, left: `${cords.x}px` }"
  />

  <!-- Header -->
  <Header />

  <!-- Main Content -->
  <BgWrapper>
    <NuxtPage class="z-10 font-sans" />
  </BgWrapper>

  <!-- Footer  -->
  <Footer />
</template>

<style lang="postcss">
  #__nuxt {
    position: relative;
  }

  html,
  main {
    @apply bg-white
    scroll-behavior: smooth;
  }

  html.dark,
  html.dark main {
    @apply bg-[#1f1f1f] text-white
  }

  body {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .animate-cursor-blob {
    animation: cursor-blob-bg 30s infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.5s;
  }

  @keyframes cursor-blob-bg {
    0% {
      @apply bg-teal/90
    }
    25% {
      @apply bg-purple/90
    }
    50% {
      @apply bg-blue/90
    }
    75% {
      @apply bg-pink
    }
    100% {
      @apply bg-cyan/90
    }
  }
</style>
