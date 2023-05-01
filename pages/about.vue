<script lang="ts" setup>
useSeoMeta({
  title: 'About Me',
  description: 'Learn more about me and my work!'
})

const myBirthday = ref(new Date(1998, 12, 29))
const myAge = computed(() => {
  const diff = Math.abs(new Date().getTime() - myBirthday.value.getTime())
  return Math.floor(diff / (1000 * 3600 * 24 * 365))
})
</script>

<template>
  <div v-motion-pop-bottom class="flex flex-col">
    <PageTitle>About Me</PageTitle>
    <div class="flex flex-col justify-between w-full p-6 ring ring-dark/10 bg-white/20 dark:(bg-white/10 ring-white/30) rounded-lg">
      <p class="text-md md:text-lg mb-3">
        I currently work at
        <a
          class="hover:opacity-75 font-bold underline"
          target="_blank"
          href="https://www.linkedin.com/company/veritone-inc-/"
          title="Veritone"
        >
          Veritone
        </a>
        as a
        <span class="font-medium font-italic">Software Engineer</span>.
      </p>
      <p class="text-md md:text-lg mb-6">
        I am {{ myAge }} years old, I have been programming since I was 13 and I don't think I will never stop 😎. In my free-time I like to contribute to open source projects, play video games and invest into stocks. Also not to mention I love drinking coffee 😛.
      </p>
      <h5 class="text-2xl font-bold mb-2">
        Fun Facts
      </h5>
      <ul class="list-disc ml-6 mb-6 text-md md:text-lg space-y-2">
        <li class="pl-1">
          I bought my first 🏡 at 17 years old with my mom 💙.
        </li>
        <li class="pl-1">
          I have a two 🐶's named <span class="font-bold">Rogue</span> and <span class="font-bold">Malibu</span>.
        </li>
        <li class="pl-1">
          I still work full-time with my mentor that hired me back in high school ⏳.
        </li>
        <li class="pl-1">
          I have been with the 💙 of my life since <span class="italic">sophmore</span> year of high school.
        </li>
        <li class="pl-1">
          I still hangout with my best friend from elementary school (basically brothers) 🤙.
        </li>
      </ul>
      <p class="text-md md:text-lg">
      </p>
      <p class="text-md md:text-lg mb-6">
        Alright that's enough about me! if you would like to learn more about my
        work please feel free to check out my
        <NuxtLink class="underline" to="/projects">
          projects
        </NuxtLink>. Also If you would like to talk to me about some business inquiries please feel free
        to <NuxtLink class="underline" to="/contact">
          contact me
        </NuxtLink>.
      </p>

      <h2 class="font-bold text-2xl sm:text-2xl">
        Let's Connect
      </h2>
      <SocialLinks />
    </div>
  </div>
</template>
