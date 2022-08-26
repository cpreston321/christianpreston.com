<script lang="ts" setup>
import { MotionVariants } from "@vueuse/motion";

const target = ref<HTMLElement>(null);
const variants = ref<MotionVariants>({
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 500,
    },
  },
});

useMotion(target, variants);

usePageMeta("Home");
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>

<template>
  <div ref="target" class="flex flex-col">
    <img
      class="w-45 md:w-30 rounded-36 mb-3 shadow"
      src="/assets/profile_image.jpeg"
      alt="Profile"
    />
    <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl mb-2 md:mb-3">
      Hi, I'm Christian Preston
    </h1>
    <p class="text-md md:text-xl">
      Software Developer, Gamer & Technology Enthusiast. Currently I live in
      <strong>Indianapolis, Indiana</strong>. I'am currently open for any
      freelance jobs.
    </p>
    <SocialLinks />
  </div>
</template>
