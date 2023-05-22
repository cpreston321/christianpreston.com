<script lang="ts" setup>
useSeoMeta({
  title: 'About Me',
  description: 'Discover the story behind my work and who I am.'
})
</script>

<template>
  <div class="flex flex-col">
    <PageTitle>About Me</PageTitle>
    <div class="flex flex-col justify-between w-full p-6 ring ring-dark/10 bg-white/20 dark:(bg-white/10 ring-white/30) rounded-lg">
      <p class="text-md md:text-lg mb-3">
        I am currently employed as a Software Engineer at
        <a
          class="hover:opacity-75 font-bold underline"
          target="_blank"
          href="https://www.linkedin.com/company/veritone-inc-/"
          title="Veritone"
        >
          Veritone
        </a>. With over a decade of programming experience since the age of 13, I have developed a passion for software development that I anticipate will endure indefinitely. In my leisure time, I enjoy contributing to open source projects, gaming, and investing in stocks. Additionally, I am an avid coffee enthusiast.
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
        </NuxtLink> or connect with me on any of my social media platforms below.
      </p>

      <h2 class="font-bold text-2xl sm:text-2xl">
        Let's Connect
      </h2>
      <SocialLinks />
    </div>
  </div>
</template>
