<script lang="ts" setup>
const { socials } = useAppConfig()

const icons = ref(new Map([
  ['github', 'logos:github-icon'],
  ['twitter', 'logos:twitter'],
  ['linkedin', 'logos-linkedin-icon']
]))

const icon = (name: string) => {
  return icons.value.get(name)
}
</script>

<template>
  <ul v-if="Object.keys(socials).length > 0" class="flex flex-row mt-3 space-x-3">
    <li
      v-for="[key, url] of Object.entries(socials)"
      :key="key"
    >
      <a class="flex rounded-full w-8 h-8 justify-center items-center hover:(opacity-70) dark:(bg-white) text-lg" target="_blank" :href="url" :title="key">
        <Icon :name="icon(key)" :class="{ 'dark:(text-black)': key === 'github'}" />
      </a>
    </li>
  </ul>
</template>
