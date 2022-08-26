<script lang="ts" setup></script>

<template>
  <div
    class="blur-blob animate-blob transition absolute -z-10 w-48 md:w-76 h-48 md:h-76 rounded-full opacity-60 mix-blend-hard-light filter blur-3xl"
  />
</template>

<style lang="postcss">
.blur-blob {
  transition-property: top, left, bottom, right, opacity, background;
  transition-duration: 2000ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
