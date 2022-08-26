<script lang="ts" setup>
import { MotionVariants } from "@vueuse/motion";

const target = ref(null);
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
const myBirthday = ref(new Date(1998, 12, 29));
const myAge = computed(() => {
  const diff = Math.abs(new Date().getTime() - myBirthday.value.getTime());
  return Math.floor(diff / (1000 * 3600 * 24 * 365));
});

useMotion(target, variants);

usePageMeta("About Me", "This more about me and my life.");
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>

<template>
  <div ref="target" class="flex flex-col">
    <div class="flex flex-row mb-2 md:mb-4">
      <NuxtLink
        class="self-center text-xl md:text-4xl hover:opacity-70 mr-3"
        to="/"
      >
        <div class="i-eva-arrow-back-fill" />
      </NuxtLink>
      <h1 class="self-center font-bold text-3xl sm:text-5xl md:text-6xl">
        About Me
      </h1>
    </div>
    <p class="text-md md:text-xl mb-3">
      I am a {{ myAge }} years old, I have been programing since I was 13 and I
      will never stop. In my free-time I contribute to open source projects,
      play video games, invest into stocks. when I can. I am always looking for
      new ways to improve my skills. I will be a great addition to anyone who is
      looking for a developer.
    </p>
    <p class="text-md md:text-xl mb-12">
      If you would like to contact me about business inquiries please
      <a class="underline" href="mailto:toptiergaming34@gmail.com">email</a> me.
    </p>

    <h2 class="font-bold text-2xl sm:text-3xl mb-2">Social Links</h2>
    <SocialLinks />
  </div>
</template>
