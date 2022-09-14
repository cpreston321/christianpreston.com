<script lang="ts" setup>
const blobsPositions: string[] = [
  'top-0 left-0',
  'bottom-0 left-3/4',
  'top-3/4 right-1/2',
  'bottom-1/2 left-1/2',
  'top-1/2 left-0'
]
const blobBgColors: string[] = [
  'bg-teal',
  'bg-purple animate-delay-200',
  'bg-blue',
  'bg-pink animate-delay-400',
  'bg-cyan animate-delay-400 w-45! h-15!'
]

const blobs: string[] = blobsPositions.map((position, index) => {
  return `${position} ${blobBgColors[index]}`
})
</script>

<template>
  <main
    class="-z-10 w-full min-h-screen flex justify-center bg-white transition duration-300 pt-24 pb-10 dark:(bg-[#1f1f1f] text-white)"
  >
    <div
      class="flex flex-col justify-center relative max-w-screen-lg w-full p-4 sm:p-6 md:p-8"
    >
      <slot />
      <div class="z-0 fixed top-0 max-w-screen-lg w-full h-full">
        <Blob v-for="blob in blobs" :key="blob" :class="blob" />
      </div>
    </div>
  </main>
</template>
