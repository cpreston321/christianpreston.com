<template>
  <div
    class="blur-blob absolute h-40 w-30 rounded-full opacity-70 blur-3xl -z-10 md:h-64 md:w-76"
  />
</template>

<style lang="postcss">
.blur-blob {
  transition-property: top, left, bottom, right, opacity, background;
  transition-duration: 2000ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
