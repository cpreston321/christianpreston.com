<script lang="ts" setup>
const blobsPositions: string[] = [
  'bottom-0 left-0',
  'bottom-0 left-3/4',
  'bottom-0 left-1/2',
  'bottom-0 right-1/2',
  'top-0 -left-20'
]
const blobBgColors: string[] = [
  'bg-teal',
  'bg-purple',
  'bg-blue',
  'bg-pink',
  'bg-cyan w-full! h-12!'
]

const blobs = blobsPositions.map((position, index) => {
  return `${position} ${blobBgColors[index]}`
})
</script>

<template>
  <main
    class="-z-10 w-full min-h-screen flex justify-center py-24"
  >
    <div
      class="flex flex-col justify-center relative max-w-screen-lg w-full p-4 sm:p-6 md:p-8"
    >
      <div class="z-0 fixed top-0 max-w-screen-lg w-full h-full">
        <Blob v-for="blob in blobs" :key="blob" :class="blob" />
      </div>

      <slot />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  main {
    background-size: 40px 40px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' transform='scale(3)'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cpath fill='none' stroke='hsla(0, 0%25, 98%25, 1)' stroke-width='.2' d='M10 0v20ZM0 10h20Z'/%3E%3C/svg%3E");
  }

  html.dark main {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' transform='scale(3)'%3E%3Crect width='100%25' height='100%25' fill='hsl(0, 0%25, 8.5%25)'/%3E%3Cpath fill='none' stroke='hsl(0, 0%25, 11.0%25)' stroke-width='.2' d='M10 0v20ZM0 10h20Z'/%3E%3C/svg%3E");
  }
</style>
