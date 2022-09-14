<script lang="ts" setup>
usePageMeta('Contact Form Success', 'Your message has been sent')
const router = useRouter()
const counter = useCountdown(10, () => {
  router.push('/')
})
</script>

<template>
  <div v-motion-pop-bottom>
    <Title>Success ✅</Title>
    <p class="text-lg">
      Thank you for submitting your contact information. I will reply to you as
      soon as I can!
    </p>
    <p class="mt-10 font-italic">
      Redirecting you back home in {{ counter }}...
    </p>
  </div>
</template>
