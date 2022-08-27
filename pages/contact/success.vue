<script lang="ts" setup>
usePageMeta("Contact Form Success", "Your message has been sent");
const counter = ref(10);
const router = useRouter();
const target = useAnimation();

const countdown = () => {
  counter.value--;
  if (counter.value > 0) {
    setTimeout(countdown, 1000);
  } else {
    setTimeout(() => {
      router.push("/");
    }, 500);
  }
};

onMounted(() => {
  countdown();
});
</script>

<template>
  <div ref="target">
    <Title>Success ✅</Title>
    <p class="text-lg">
      Thank you for submitting your contact information. I will reply to you as
      soon as I can!
    </p>
    <p class="mt-10 font-italic">Redirecting back home in {{ counter }}...</p>
  </div>
</template>
