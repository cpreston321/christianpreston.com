<script lang="ts" setup>
useSeoMeta({
  title: 'About Me',
  description: 'Discover the story behind my work and who I am.',
})
</script>

<template>
  <div class="flex flex-col">
    <PageTitle>About Me</PageTitle>
    <div class="w-full flex flex-col justify-between rounded-lg bg-white/20 p-6 ring ring-dark/10 dark:(bg-white/10 ring-white/30)">
      <p class="text-md mb-3 md:text-lg">
        I am currently employed as a Software Engineer at
        <a
          class="font-bold underline hover:opacity-75"
          target="_blank"
          href="https://www.linkedin.com/company/veritone-inc-/"
          title="Veritone"
        >
          Veritone
        </a>. With over a decade of programming experience since the age of 13, I have developed a passion for software development that I anticipate will endure indefinitely. In my leisure time, I enjoy contributing to open-source projects, gaming, and investing in stocks. Additionally, I am an avid coffee enthusiast.
      </p>
      <h5 class="mb-2 text-2xl font-bold">
        Fun facts
      </h5>
      <ul class="text-md mb-6 ml-6 list-disc space-y-2 md:text-lg">
        <li class="pl-1">
          Father of one beautiful daughter.
        </li>
        <li class="pl-1">
          I bought my first house at 17 years old with my mom.
        </li>
        <li class="pl-1">
          I have a two dogs's named <span class="font-bold">Rogue</span> and <span class="font-bold">Malibu</span>.
        </li>
        <li class="pl-1">
          I still work full-time with my mentor that hired me back in high school.
        </li>
        <li class="pl-1">
          I have been with the love of my life since high school.
        </li>
        <li class="pl-1">
          I still hangout with my best friend from elementary school <i>(basically brothers)</i>.
        </li>
      </ul>

      <p class="text-md mb-6 md:text-lg">
        Alright, that's enough about me! If you would like to learn more about my
        work, please feel free to check out my
        <NuxtLink class="underline" to="/projects">
          projects
        </NuxtLink>. Also, if you would like to talk to me about any business inquiries, please feel free
        to <NuxtLink class="underline" to="/contact">
          contact me
        </NuxtLink> or connect with me on any of my social media platforms below.
      </p>

      <h2 class="text-2xl font-bold sm:text-2xl">
        Let's Connect
      </h2>
      <SocialLinks />
    </div>
  </div>
</template>
