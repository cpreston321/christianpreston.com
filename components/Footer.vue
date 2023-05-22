<template>
  <footer
    id="footer"
    class="z-10 py-3 fixed bottom-0 left-0 right-0 w-full text-xs justify-center backdrop-blur-sm dark:(text-white)"
  >
    <div class="flex flex-col items-center">
      <a
        class="mb-2"
        href="https://www.buymeacoffee.com/cpreston321"
        @click="umTrackEvent(`footer:btn:clicked`, {
          name: 'Buy Me A Coffee',
        })"
      >
        <NuxtImg class="w-40" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&slug=cpreston321&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" alt="Buy Me a Coffee" />
      </a>
      <div class="flex flex-row space-x-2 items-center">
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
      </div>
    </div>
  </footer>
</template>
