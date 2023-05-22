<script lang="ts" setup>
useSeoMeta({
  title: 'Projects',
  description: 'These are some of my projects that I have worked on in past and present.'
})

const page = ref(1)
const el = ref<HTMLElement>()
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
  <div  class="flex flex-col">
    <PageTitle>Projects</PageTitle>
    <!-- <input
      class="px-4 py-2 rounded-8 mb-3"
      type="text"
      placeholder="Search through my projects"
    /> -->
    <div
      v-if="projects?.length"
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
