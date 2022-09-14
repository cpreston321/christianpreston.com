<script lang="ts" setup>
usePageMeta('Home')
</script>

<template>
  <div v-motion-pop-bottom class="flex flex-col">
    <NuxtImg
      class="w-45 md:w-30 rounded-36 mb-3 shadow"
      src="/profile_image.jpeg"
      alt="Profile"
    />
    <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl mb-2 md:mb-3">
      Hi, I'm Christian Preston
    </h1>
    <p class="text-md md:text-xl">
      Software Engineer, Gamer & Technology Enthusiast. Currently I live in
      <strong>Indianapolis, Indiana</strong>. I'am currently open for any
      freelance jobs.
    </p>
    <SocialLinks />
  </div>
</template>
