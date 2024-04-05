<script lang="ts" setup>
interface ProjectCardProps {
  project?: Record<string, any>
}

withDefaults(defineProps<ProjectCardProps>(), {
  project: () => ({}),
})
</script>

<template>
  <div
    class="w-[350px] w-full flex flex-col rounded-lg bg-white/20 ring ring-dark/10 dark:(bg-white/10 ring-white/30)"
  >
    <a
      class="h-46 overflow-hidden rounded-t-lg md:h-55"
      :href="project.link"
      target="_blank"
      @click="umTrackEvent(`project:clicked`, {
        name: project.name,
        title: project.title,
        link: project.link,
      })"
    >
      <NuxtImg
        class="h-full w-full object-cover object-top transition-all duration-300 hover:scale-105"
        :src="project.preview"
        :title="project.name"
        :alt="project.name"
        lazy
      />
    </a>
    <div class="flex flex-col p-4">
      <ProjectTags :tags="project.tags" />
      <h3 class="mb-2 text-2xl font-bold md:text-3xl">
        {{ project.title }}
      </h3>
      <p class="text-xs md:text-sm" :title="project.description">
        {{ project.description }}
      </p>
      <a
        :href="project.link"
        target="_blank"
        class="justify-flex-end mt-2 flex flex-row text-lg hover:opacity-75"
        :title="project.title"
        @click="umTrackEvent(`project:clicked`, {
          name: project.name,
          title: project.title,
          link: project.link,
        })"
      >
        <IconCSS name="eva:external-link-fill" />
      </a>
    </div>
  </div>
</template>
