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
useMotion(target, variants);

const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects").find()
);

usePageMeta("Projects 🤩", "These are my projects that I have worked on.");
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
        Projects
      </h1>
    </div>
    <!-- <input
      class="px-4 py-2 rounded-8 mb-3"
      type="text"
      placeholder="Search through my projects"
    /> -->
    <div v-if="projects.length" class="grid grid-cols sm:grid-cols-2 gap-4">
      <ProjectCard :projects="projects" />
    </div>
  </div>
</template>

<style lang="postcss">
.horizontal-snap {
  display: grid;
  grid-auto-flow: column;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}

.horizontal-snap > .card {
  scroll-snap-align: center;
}
</style>
