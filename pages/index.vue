<script lang="ts" setup>
useSeoMeta({
  title: 'Home'
})
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
      Software Engineer, Gamer & a Technology Enthusiast. Currently live in
      <strong>Indianapolis, Indiana</strong>. I currently work full time but I'am open for any
      freelance jobs.
    </p>

    <SocialLinks />

    <div class="flex flex-row space-x-3 mt-6">
      <NuxtLink class="inline-flex transition ease duration-100 items-center space-x-3 px-4 py-2 bg-transparent rounded-full text-md text-black font-medium ring ring-black hover:(bg-black text-white) dark:(ring-white text-white)" to="/projects">
        My Projects
        <Icon name="mdi:arrow-right" class="text-xl ml-1" />
      </NuxtLink>
      <NuxtLink class="inline-flex items-center space-x-3 text-md font-medium hover:opacity-70" to="/about">
        About Me
      </NuxtLink>
    </div>
  </div>
</template>
