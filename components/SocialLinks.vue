<script lang="ts" setup>
const { socials } = useAppConfig();
</script>

<template>
  <!-- <div class="i-logos-github-icon"></div>
  <div class="i-logos-twitter"></div>
  <div class="i-logos-linkedin-icon"></div> -->
  <ul v-if="socials.length > 0" class="flex flex-row my-3">
    <li
      v-for="social in socials"
      :key="social.name"
      class="mr-3 p-2 shadow rounded-full hover:(opacity-80) dark:(bg-white shadow-none)"
    >
      <a target="_blank" :href="social.url" :title="social.name">
        <div :class="`i-logos-${social.icon}`" />
      </a>
    </li>
  </ul>
</template>
