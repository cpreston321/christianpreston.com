<script lang="ts" setup>
import { reset } from '@formkit/core'

useSeoMeta({
  title: 'Contact',
  description: 'Have a question or inquiry? Don’t hesitate to reach out.'
})

const router = useRouter()

interface ContactForm {
  name: string
  email: string
  message: string
}

const submit = async (data: ContactForm) => {
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: data,
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
    <PageTitle>Contact Me</PageTitle>
    <div class="flex flex-col justify-between w-full p-6 ring ring-dark/10 bg-white/20 dark:(bg-white/10 ring-white/30) rounded-lg">
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
        <FormKit
          type="turnstile"
          name="token"
          class="mb-6"
        />
      </FormKit>
    </div>
  </div>
</template>
