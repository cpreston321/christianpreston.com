<script lang="ts" setup>
useSeoMeta({
  title: '404',
  description: 'Page not found',
})
</script>

<template>
  <div class="mb-4 flex flex-row md:mb-6">
    <NuxtLink
      to="/"
      class="mr-3 self-center text-xl md:text-4xl hover:opacity-70"
    >
      <IconCSS name="eva:arrow-back-fill" />
    </NuxtLink>
    <h1 class="self-center text-3xl font-bold md:text-6xl sm:text-5xl">
      404 😱
    </h1>
  </div>
  <p class="text-lg">
    Page not found
  </p>
</template>
