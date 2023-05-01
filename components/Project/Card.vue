<script lang="ts" setup>
interface ProjectCardProps {
  project?: Record<string, any>
}

withDefaults(defineProps<ProjectCardProps>(), {
  project: () => ({})
})
</script>

<template>
  <div
    class="flex flex-col justify-between w-full ring p-4 ring-dark/10 bg-white/20 dark:(bg-white/10 ring-white/30) rounded-lg w-[350px]"
  >
    <a class="h-46 md:h-55 overflow-hidden rounded-lg" :href="project.link" target="_blank">
      <NuxtPicture
        :src="project.preview"
        :title="project.name"
        :alt="project.name"
      />
    </a>
    <div class="px-2 mt-2 md:mt-3">
      <ProjectTags :tags="project.tags" />
      <h3 class="font-bold text-2xl md:text-3xl mb-2">
        {{ project.title }}
      </h3>
      <p class="text-xs md:text-sm" :title="project.description">
        {{ project.description }}
      </p>
      <a
        :href="project.link"
        target="_blank"
        class="text-lg flex flex-row mt-2 justify-flex-end hover:opacity-75"
        :title="project.title"
      >
        <IconCSS name="eva:external-link-fill" />
      </a>
    </div>
  </div>
</template>
