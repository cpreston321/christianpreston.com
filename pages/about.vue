<script lang="ts" setup>
usePageMeta('About Me', 'This more about me and my life.')

const myBirthday = ref(new Date(1998, 12, 29))
const myAge = computed(() => {
  const diff = Math.abs(new Date().getTime() - myBirthday.value.getTime())
  return Math.floor(diff / (1000 * 3600 * 24 * 365))
})
</script>

<template>
  <div v-motion-pop-bottom class="flex flex-col">
    <Title>About Me</Title>
    <img
      class="w-45 md:w-30 rounded-36 mb-6 shadow"
      src="/profile_image.jpeg"
      alt="Profile"
    />
    <p class="text-md md:text-xl mb-3">
      I currently work a
      <span class="font-medium font-italic">Software Engineer</span> at
      <strong>
        <a
          class="hover:opacity-75 underline"
          target="_blank"
          href="https://www.linkedin.com/company/veritone-inc-/"
          title="Veritone"
        >
          Veritone
        </a>
        💼
      </strong>
      .
    </p>
    <p class="text-md md:text-xl mb-3">
      I am {{ myAge }} years old. I have been programing since I was 13 and will
      never stop 😎. In my free-time I like to contribute to open source
      projects, play video games, invest into stocks. Always looking for new
      ways to improve my skill set.
    </p>
    <p class="text-md md:text-xl mb-12">
      If you would like to contact me about business inquiries please feel free
      to <NuxtLink class="underline" to="/contact">
        contact me
      </NuxtLink>.
    </p>

    <h2 class="font-bold text-2xl sm:text-3xl mb-2">
      Social Links
    </h2>
    <SocialLinks />
  </div>
</template>
