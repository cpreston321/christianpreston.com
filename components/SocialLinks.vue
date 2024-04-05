<script lang="ts" setup>
const { socials } = useAppConfig()

const icons = {
  github: 'simple-icons:github',
  x: 'simple-icons:x',
  linkedin: 'simple-icons:linkedin',
}

function icon(name: keyof typeof socials) {
  return icons[name]
}
</script>

<template>
  <ul class="flex flex-row space-x-3">
    <li
      v-for="(url, key) in socials"
      :key="key"
    >
      <a
        class="h-8 w-8 flex items-center justify-center rounded-2 text-xl dark:(bg-white) hover:(opacity-70)"
        target="_blank"
        :href="url"
        :title="key"
      >
        <Icon
          :name="icon(key)"
          color="black"
        />
      </a>
    </li>
  </ul>
</template>
