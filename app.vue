<script lang="ts" setup>
useSeoMeta({
  googleSiteVerification: 'sRar0M0gLALXwyv7ycuIFXRlG4e2Sly_RQNESdxZlgs'
})

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
    id="cursor-blob"
    class="animate-cursor-blob w-20! h-20! fixed z-9 blur-xl"
    :style="{ top: `${cords.y}px`, left: `${cords.x}px` }"
  />

  <a class="fixed bottom-10 right-0 z-20" href="https://www.buymeacoffee.com/cpreston321">
    <img class="w-[80%]" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&slug=cpreston321&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" />
  </a>

  <!-- Header -->
  <Header />

  <!-- Main Content -->
  <BgWrapper>
    <SeoKit />
    <OgImageScreenshot
      selector="main"
      mask="#nuxt-devtools-container, #footer, #header, .nuxt-devtools-toggle"
      :delay="1200"
    />
    <NuxtPage class="z-10" />
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
