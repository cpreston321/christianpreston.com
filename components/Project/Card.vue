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
    class="flex flex-col justify-between w-full p-4 bg-opacity-70 bg-white rounded-8 shadow-xl w-[350px] dark:(bg-[#1f1f1f] bg-opacity-80!)"
  >
    <a class="h-46 md:h-55 overflow-hidden rounded-3" :href="project.link" target="_blank">
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
