<script lang="ts" setup>
import { reset } from '@formkit/core'

usePageMeta('Contact Form', 'Contact me for any questions or inquiries.')

const token = ref()
const router = useRouter()

const submit = async (data) => {
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: { token: token.value, ...data },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      reset('contact', {
        name: '',
        email: '',
        message: ''
      })
      router.push('/contact/success')
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error submitting form', error)
  }
}
</script>

<template>
  <div v-motion-pop-bottom>
    <Title>Contact Me</Title>
    <FormKit id="contact" type="form" @submit="submit">
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
      <Turnstile class="mb-6" v-model="token" :options="{ action: 'vue' }" />
    </FormKit>
  </div>
</template>
