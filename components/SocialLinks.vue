<script lang="ts" setup>
const { socials } = useAppConfig();
</script>

<template>
  <!-- <div class="i-logos-github-icon"></div>
  <div class="i-logos-twitter"></div>
  <div class="i-logos-linkedin-icon"></div> -->
  <ul v-if="socials.length > 0" class="flex flex-row my-3">
    <li v-for="social in socials" :key="social.name" class="mr-4">
      <a class="hover:opacity-80" :href="social.url" target="_blank">
        <div
          :class="`i-logos-${social.icon}  shadow-2xl dark:shadow-white`"
        ></div>
      </a>
    </li>
  </ul>
</template>
