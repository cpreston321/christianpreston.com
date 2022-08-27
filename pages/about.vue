<script lang="ts" setup>
const target = useAnimation();
usePageMeta("About Me", "This more about me and my life.");

const myBirthday = ref(new Date(1998, 12, 29));
const myAge = computed(() => {
  const diff = Math.abs(new Date().getTime() - myBirthday.value.getTime());
  return Math.floor(diff / (1000 * 3600 * 24 * 365));
});
</script>

<template>
  <div ref="target" class="flex flex-col">
    <div class="flex flex-row mb-4 md:mb-6">
      <NuxtLink
        class="self-center text-xl md:text-4xl hover:opacity-70 mr-3"
        to="/"
      >
        <div class="i-eva-arrow-back-fill" />
      </NuxtLink>
      <h1 class="self-center font-bold text-3xl sm:text-5xl md:text-6xl">
        About Me
      </h1>
    </div>
    <nuxt-img
      class="w-45 md:w-30 rounded-36 mb-6 shadow"
      src="/profile_image.jpeg"
      alt="Profile"
    />
    <p class="text-md md:text-xl mb-3">
      I currently work at
      <strong>
        <a
          class="hover:opacity-75"
          target="_blank"
          href="https://www.linkedin.com/company/veritone-inc-/"
          title="Veritone"
        >
          Veritone 💼
        </a>
      </strong>
      as a Software Developer.
    </p>
    <p class="text-md md:text-xl mb-3">
      I am {{ myAge }} years old. I have been programing since I was 13 and will
      never stop 😎. In my free-time I like to contribute to open source
      projects, play video games, invest into stocks. Always looking for new
      ways to improve my skill set.
    </p>
    <p class="text-md md:text-xl mb-12">
      If you would like to contact me about business inquiries please feel free
      to
      <a class="underline" href="mailto:toptiergaming34@gmail.com">email</a> me.
    </p>

    <h2 class="font-bold text-2xl sm:text-3xl mb-2">Social Links</h2>
    <SocialLinks />
  </div>
</template>
