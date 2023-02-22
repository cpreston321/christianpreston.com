<script lang="ts" setup>
const route = useRoute()
const colorMode = useColorMode()

interface Links {
  name: string
  to: string
}
const links: Links[] = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Projects',
    to: '/projects'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Contact',
    to: '/contact'
  }
]

/**
 * Toggle between system, light and dark theme
 */
const toggleTheme = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <header
    id="header"
    class="z-12 fixed top-0 left-0 right-0 dark:text-white backdrop-blur-sm"
  >
    <div class="flex flex-row justify-between max-w-screen-lg p-4 mx-auto">
      <NuxtLink class="self-center" to="/">
        <NuxtImg v-if="colorMode.value === 'dark'" class="w-6" src="/logo-dark.png" alt="CP logo" />
        <NuxtImg v-else class="w-6" src="/logo.png" alt="CP logo" />
      </NuxtLink>
      <nav class="flex flex-row justify-between rounded-8 shadow-xl p-.5 ring ring-black dark:ring-white">
        <ul class="flex justify-center text-xs md:text-md font-bold">
          <li
            v-for="(link, idx) in links"
            :key="link.name"
            class="p-2 md:px-3 self-center rounded-8 hover:bg-opacity-70"
            :class="{
              'bg-opacity-70 bg-black text-white dark:(bg-opacity-70 bg-white text-black)':
                route.path === link.to,
              'bg-transparent hover:(bg-black text-white) dark:hover:(bg-opacity-80 bg-white text-black)': route.path !== link.to,
              'ml-1': idx !== 0
            }"
          >
            <NuxtLink class="rounded py-1" :to="link.to">
              {{ link.name }}
            </NuxtLink>
          </li>
          <li
            class="ml-1 px-3 flex items-center h-full rounded-8 hover:(bg-opacity-70 bg-black text-white) dark:hover:(bg-opacity-80 bg-white text-black)"
          >
            <button
              class="flex items-center text-lg self-center"
              aria-label="Toggle Dark mode"
              @click="toggleTheme()"
            >
              <ColorScheme placeholder="...">
                <Transition name="fade" mode="out-in">
                  <IconCSS v-if="colorMode.preference === 'dark'" name="uil:moon" />
                  <IconCSS v-else-if="colorMode.preference === 'light'" name="uil:sun" />
                  <IconCSS v-else name="uil:desktop" />
                </Transition>
              </ColorScheme>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
