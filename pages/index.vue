<script lang="ts" setup>
useSeoMeta({
  title: 'Home',
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
          name: 'resume',
        })"
      >
        <NuxtImg
          class="mb-3 w-45 rounded-lg ring ring-black/20 md:w-30 dark:ring-white/20"
          src="/profile_image.jpeg"
          alt="Profile Picture"
        />
      </NuxtLink>
    </div>
    <h1 class="mb-2 text-3xl font-bold md:mb-3 md:text-6xl sm:text-5xl">
      Christian Preston
    </h1>
    <p class="text-md md:text-xl">
      I'm a Software Engineer, Gamer, Investor & Technology Enthusiast. I reside in <strong>Indianapolis, Indiana</strong> and am currently employed full-time, but I remain open to freelance opportunities.
    </p>

    <SocialLinks />

    <div class="mt-6 flex flex-row space-x-5">
      <NuxtLink
        class="text-md group inline-flex items-center rounded-lg bg-black/2 px-3 py-2 text-black font-medium ring ring-black/30 transition duration-200 space-x-3 dark:(bg-white/10 text-white ring-white/30)"
        to="/projects"
        @click="umTrackEvent('home:btn:clicked', {
          name: 'my-projects',
        })"
      >
        My Projects
        <Icon name="mdi:arrow-right" class="ml-1 translate-x-0 text-xl transition duration-200 group-hover:translate-x-1" />
      </NuxtLink>
      <NuxtLink
        class="text-md inline-flex items-center font-medium space-x-3 hover:opacity-70"
        to="/about"
        @click="umTrackEvent('home:btn:clicked', {
          name: 'about-me',
        })"
      >
        About Me
      </NuxtLink>
    </div>
  </div>
</template>
