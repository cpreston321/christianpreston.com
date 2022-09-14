<script lang="ts" setup>
usePageMeta(
  'Projects 🤩',
  'These are my projects that I have worked on in past and present.'
)

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').find()
)
</script>

<template>
  <div v-motion-pop-bottom class="flex flex-col">
    <div class="flex flex-row mb-4 md:mb-6">
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
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
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
