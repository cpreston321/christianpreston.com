<script lang="ts" setup>
useSeoMeta({
  title: '404',
  description: 'Page not found'
})
</script>

<template>
  <div class="flex flex-row mb-4 md:mb-6">
    <NuxtLink
      to="/"
      class="self-center text-xl md:text-4xl hover:opacity-70 mr-3"
    >
      <IconCSS name="eva:arrow-back-fill" />
    </NuxtLink>
    <h1 class="self-center font-bold text-3xl sm:text-5xl md:text-6xl">
      404 😱
    </h1>
  </div>
  <p class="text-lg">
    Page not found
  </p>
</template>
