<script lang="ts" setup>
usePageMeta(
  'Projects 🤩',
  'These are my projects that I have worked on in past and present.'
)

const page = ref(1)
const el = ref<HTMLElement>(null)
const pageLimit = computed(() => page.value * 12)

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects')
    .sort({
      title: 1
    })
    .limit(pageLimit.value)
    .find()
)

// useInfiniteScroll(
//   el,
//   () => {
//     if (projects.value.length < pageLimit.value) {
//       return
//     }

//     page.value++
//   },
//   { distance: 10 }
// )
</script>

<template>
  <div v-motion-pop-bottom class="flex flex-col">
    <Title>Projects</Title>
    <!-- <input
      class="px-4 py-2 rounded-8 mb-3"
      type="text"
      placeholder="Search through my projects"
    /> -->
    <div
      v-if="projects.length"
      ref="el"
      class="grid grid-cols sm:grid-cols-2 gap-4"
    >
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
