<script lang="ts" setup>
import { reset } from '@formkit/core'

usePageMeta('Contact Form', 'Contact me for any questions or inquiries.')

const router = useRouter()
const payload = ref({
  name: '',
  email: '',
  message: '',
  bot_field: ''
})

const submit = async () => {
  try {
    const data = await $fetch('/api/contact', {
      method: 'POST',
      body: payload.value,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (data.ok) {
      reset('contact', {
        name: '',
        email: '',
        message: '',
        botField: ''
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
    <FormKit id="contact" v-model="payload" type="form" @submit="submit">
      <FormKit name="botField" type="hidden" value="" />
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
