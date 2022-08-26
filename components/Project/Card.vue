<script lang="ts" setup>
defineProps({
  projects: {
    type: Array,
    default: [],
  },
});

//if length is greater than 55 then add ... to the end of the string
const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};
</script>

<template>
  <div
    class="flex flex-col justify-between w-full p-4 bg-opacity-70 bg-white dark:bg-[#1f1f1f] dark:bg-opacity-80! rounded-8 shadow-xl w-[350px] h-[380px] overflow-hidden"
    v-for="project in projects"
    :key="project.name"
  >
    <a class="h-48" :href="project.link" target="_blank">
      <div
        class="relative w-full h-full bg-cover bg-top bg-no-repeat rounded-6"
        :style="{
          backgroundImage: `url('/projects/${project.preview}')`,
        }"
      ></div>
    </a>
    <div class="px-2 mt-3">
      <ProjectTags :tags="project.tags" />
      <h3 class="font-bold text-3xl mb-2">{{ project.title }}</h3>
      <p class="text-sm">{{ truncate(project.description, 125) }}</p>
      <a
        :href="project.link"
        target="_blank"
        class="text-lg flex flex-row mt-2 justify-flex-end hover:opacity-75"
      >
        <div class="i-eva-external-link-fill"></div>
      </a>
    </div>
  </div>
</template>
