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
    to: '/',
  },
  {
    name: 'Projects',
    to: '/projects',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
]

/**
 * Toggle between system, light and dark theme
 */
function toggleTheme() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <header
    id="header"
    class="fixed left-0 right-0 top-0 z-12 backdrop-blur-sm dark:text-white"
  >
    <div class="mx-auto max-w-screen-lg flex flex-row justify-between p-4">
      <NuxtLink class="self-center" to="/">
        <NuxtImg v-if="colorMode.value === 'dark'" class="w-6" src="/logo-dark.png" alt="Dark CP logo" />
        <NuxtImg v-else class="w-6" src="/logo.png" alt="Light CP logo" />
      </NuxtLink>
      <nav class="flex flex-row justify-between rounded-lg p-.5 ring ring-black/20 dark:ring-white/20">
        <ul class="md:text-md flex justify-center text-xs font-bold">
          <li
            v-for="(link, idx) in links"
            :key="link.name"
            class="self-center rounded-md p-2 transition-colors duration-200 ease-in md:px-3"
            :class="{
              'bg-black/10 dark:(bg-white/20)':
                route.path === link.to,
              'hover:(bg-black/10) dark:hover:(bg-white/20)': route.path !== link.to,
              'ml-1': idx !== 0,
            }"
          >
            <NuxtLink class="rounded py-1" :to="link.to">
              {{ link.name }}
            </NuxtLink>
          </li>
          <li
            class="ml-1 h-full flex items-center rounded-lg px-3 hover:(bg-black/10) dark:hover:(bg-white/30)"
          >
            <button
              class="flex items-center self-center text-lg"
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
