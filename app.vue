<script lang="ts" setup></script>

<template>
  <NuxtLayout>
    <SeoKit />
    <OgImageScreenshot
      selector="main"
      mask="#nuxt-devtools-container, #footer, #header"
      :delay="1200"
    />
    <NuxtPage class="z-10" />
  </NuxtLayout>
</template>
