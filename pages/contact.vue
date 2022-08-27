<script lang="ts" setup>
import { reset } from "@formkit/core";
import { useToast, POSITION } from "vue-toastification";

const toast = useToast();

usePageMeta("Contact Form", "Contact me for any questions or inquiries.");

const payload = ref({
  name: "",
  email: "",
  message: "",
  bot_field: "",
});

const submit = async () => {
  try {
    const data = await $fetch("/api/contact", {
      method: "POST",
      body: payload.value,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.ok) {
      toast.success("Success, Thank you for submitting.", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
      reset("contact", {
        name: "",
        email: "",
        message: "",
        bot_field: "",
      });
    }
  } catch (error) {
    toast.error("Error couldn't submit contact information.", {
      position: POSITION.BOTTOM_RIGHT,
      timeout: 2000,
    });
    console.error("Error submitting form", error);
  }
};
</script>

<template>
  <div>
    <div class="flex flex-row mb-4 md:mb-6">
      <NuxtLink
        class="self-center text-xl md:text-4xl hover:opacity-70 mr-3"
        to="/"
      >
        <div class="i-eva-arrow-back-fill" />
      </NuxtLink>
      <h1 class="self-center font-bold text-3xl sm:text-5xl md:text-6xl">
        Contact Me
      </h1>
    </div>
    <FormKit type="form" id="contact" @submit="submit" v-model="payload">
      <FormKit name="bot_field" type="hidden" value="" />
      <FormKit
        label="Name"
        name="name"
        type="text"
        placeholder="Enter your name"
        validation="required"
      />
      <FormKit
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        validation="required|email"
      />
      <FormKit
        type="textarea"
        label="Message"
        name="message"
        rows="5"
        placeholder="Enter your message to Christian..."
        validation="required"
      />
    </FormKit>
  </div>
</template>
