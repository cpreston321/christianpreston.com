<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);

const route = useRoute();

const links: object[] = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
</script>

<template>
  <div
    class="z-12 fixed pt-6 pb-3 top-0 left-0 right-0 flex flex-row justify-between max-w-screen-lg px-4 mx-auto dark:text-white backdrop-filter backdrop-blur-sm"
  >
    <NuxtLink class="self-center" to="/">
      <img v-if="isDark" class="w-6" src="/logo-dark.png" alt="CP logo" />
      <img v-else class="w-6" src="/logo.png" alt="CP logo" />
    </NuxtLink>
    <nav class="flex flex-row justify-between rounded-8 shadow-xl">
      <ul class="flex justify-center text-xs md:text-md font-bold py-1 px-2">
        <li
          v-for="(link, idx) in links"
          :key="link.name"
          class="py-2 px-2 md:px-4 self-center rounded-8 transition bg-transparent hover:bg-opacity-70 hover:bg-black hover:text-white dark:hover:(bg-opacity-80 bg-white text-black)"
          :class="{
            'bg-opacity-70! bg-black! text-white! dark:(bg-opacity-70! bg-white! text-black!)':
              route.path === link.to,
            'ml-1': idx !== 0,
          }"
        >
          <NuxtLink class="rounded py-1" :to="link.to">{{
            link.name
          }}</NuxtLink>
        </li>
        <li
          class="flex ml-1 p-2 self-center rounded-8 hover:(bg-opacity-70 bg-black text-white) dark:hover:(bg-opacity-80 bg-white text-black)"
        >
          <button
            class="text-lg self-center"
            aria-label="Toggle Dark mode"
            @click="toggleDark()"
          >
            <transition name="fade" mode="out-in">
              <div v-if="isDark" class="i-ic-round-light-mode" />
              <div v-else class="i-ic-round-dark-mode" />
            </transition>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
