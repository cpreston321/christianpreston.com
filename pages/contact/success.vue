<script lang="ts" setup>
useSeoMeta({
  title: 'Contact Success',
  description: 'Thank you for submitting your contact information. I will reply to you as soon as I can!'
})

const router = useRouter()
const counter = useCountdown(10, () => {
  router.push('/')
})
</script>

<template>
  <div v-motion-pop-bottom>
    <PageTitle>Success ✅</PageTitle>
    <p class="text-lg">
      Thank you for submitting your contact information. I will reply to you as
      soon as I can!
    </p>
    <p class="mt-10 font-italic">
      Redirecting you back home in {{ counter }}...
    </p>
  </div>
</template>
