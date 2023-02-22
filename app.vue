<script lang="ts" setup>
useSeoMeta({
  googleSiteVerification: 'Rar0M0gLALXwyv7ycuIFXRlG4e2Sly_RQNESdxZlgs'
})
</script>

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
