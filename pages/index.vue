<script lang="ts" setup>
useSeoMeta({
  title: 'Home'
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex">
      <NuxtLink
        class="block"
        to="/cp-resume.pdf"
        target="_blank"
        @click="umTrackEvent('home:btn:clicked', {
          name: 'resume'
        })"
      >
        <NuxtImg
          class="w-45 md:w-30 rounded-lg mb-3 ring ring-black/20 dark:ring-white/20"
          src="/profile_image.jpeg"
          alt="Profile Picture"
        />
      </NuxtLink>
    </div>
    <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl mb-2 md:mb-3">
      Christian Preston
    </h1>
    <p class="text-md md:text-xl">
      I'm a Software Engineer, Gamer, Investor & Technology Enthusiast. I reside in <strong>Indianapolis, Indiana</strong> and am currently employed full-time, but I remain open to freelance opportunities.
    </p>

    <SocialLinks />

    <div class="flex flex-row space-x-3 mt-6">
      <NuxtLink
        class="group inline-flex transition duration-200 items-center space-x-3 px-3 py-2 rounded-lg text-md text-black font-medium ring ring-black/30 bg-black/2 dark:(ring-white/30 bg-white/10 text-white)"
        to="/projects"
        @click="umTrackEvent('home:btn:clicked', {
          name: 'my-projects'
        })"
      >
        My Projects
        <Icon name="mdi:arrow-right" class="transition duration-200 translate-x-0 group-hover:translate-x-1 text-xl ml-1" />
      </NuxtLink>
      <NuxtLink
        class="inline-flex items-center space-x-3 text-md font-medium hover:opacity-70"
        to="/about"
        @click="umTrackEvent('home:btn:clicked', {
          name: 'about-me'
        })"
      >
        About Me
      </NuxtLink>
    </div>
  </div>
</template>
