<script lang="ts" setup>
defineProps({
  tags: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div v-if="tags.length > 0" class="flex flex-wrap mb-2">
    <span
      v-for="(tag, idx) in tags"
      :key="idx"
      class="px-2 py-1 rounded-full text-xs! font-semibold shadow-md bg-white dark:bg-[#1f1f1f] dark:shadow! dark:shadow-white dark:bg-opacity-80! dark:bg-opacity-80! mr-1"
    >
      #{{ tag }}
    </span>
  </div>
</template>
