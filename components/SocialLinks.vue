<script lang="ts" setup>
const { socials } = useAppConfig()

const icons = ref(
  new Map([
    ['github', 'logos:github-icon'],
    ['x', 'mingcute:social-x-line'],
    ['linkedin', 'logos:linkedin-icon'],
  ]),
)

function icon(name: string) {
  return icons.value.get(name)
}
</script>

<template>
  <ul v-if="Object.keys(socials).length > 0" class="mt-3 flex flex-row space-x-3">
    <li
      v-for="[key, url] of Object.entries(socials)"
      :key="key"
    >
      <a
        class="h-8 w-8 flex items-center justify-center rounded-2 text-xl dark:(bg-white) hover:(opacity-70)"
        target="_blank"
        :href="url"
        :title="key"
      >
        <Icon
          :name="icon(key) as string"
          :class="{ 'dark:(text-black)': key === 'github' || key === 'x' }"
        />
      </a>
    </li>
  </ul>
</template>
