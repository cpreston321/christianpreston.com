<template>
  <div
    class="z-10 py-3 fixed bottom-0 left-0 right-0 w-full flex flex-row text-xs justify-center backdrop-filter backdrop-blur-sm dark:text-white"
  >
    <div class="self-center">
      &copy; Christian {{ new Date().getFullYear() }}. All rights reserved.
    </div>
    <div class="mx-2 self-center">|</div>
    <div class="inline-flex self-center">
      made with
      <a
        href="https://v3.nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="i-logos-nuxt-icon w-10" />
      </a>
    </div>
  </div>
</template>
