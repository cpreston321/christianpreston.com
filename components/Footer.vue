<template>
  <footer
    id="footer"
    class="z-10 py-3 fixed bottom-0 left-0 right-0 w-full flex flex-row space-x-2 items-center text-xs justify-center backdrop-blur-sm dark:(text-white)"
  >
    <div class="self-center">
      Copyright {{ new Date().getFullYear() }} &copy; Christian Preston
    </div>
    <div class="self-center">
      |
    </div>
    <div class="inline-flex items-center">
      made with
      <a
        href="https://v3.nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-2"
      >
        <Icon name="logos:nuxt-icon" class="text-xl" />
      </a>
    </div>
  </footer>
</template>
