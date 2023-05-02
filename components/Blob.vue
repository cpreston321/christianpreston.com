<template>
  <div
    class="blur-blob rounded-full absolute -z-10 w-30 md:w-76 h-40 md:h-64 opacity-70 blur-3xl"
  />
</template>

<style lang="postcss">
.blur-blob {
  transition-property: top, left, bottom, right, opacity, background;
  transition-duration: 2000ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
