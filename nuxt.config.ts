import process from 'node:process'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@unocss/reset/tailwind.css', '@/assets/formkit.css'],
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg' }],
    },
  },

  extends: ['nuxt-umami'],

  appConfig: {
    umami: {
      ignoreLocalhost: true,
      version: 2,
    },
  },

  /**
   * Modules
   * @see https://modules.nuxtjs.org/?version=3.x
   * ------------------------------------------------------------
   * Vueuse
   * @see https://vueuse.org/guide/
   * ------------------------------------------------------------
   * Unocss
   * @see https://uno.antfu.me/
   * ------------------------------------------------------------
   * FormKit
   * @see https://formkit.com/essentials/inputs
   * ------------------------------------------------------------
   */
  modules: [
    'nuxt-build-cache',
    '@nuxthub/core',
    '@nuxtjs/turnstile',
    'nuxt-icon',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@formkit/nuxt',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

  runtimeConfig: {
    // !IMPORTANT: Nuxi doesn't seem to automatically inject at runtime
    // Temporarily using process.env for now
    public: {
      umamiId: process.env.NUXT_PUBLIC_UMAMI_ID || '',
      umamiHost: process.env.NUXT_PUBLIC_UMAMI_HOST || '',
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
      },
    },
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
    },
  },

  site: {
    url: 'https://christianpreston.com',
    name: 'Christian Preston',
    description: 'I’m a self-taught software developer based in Indianapolis, IN, with a passion for collaboration, building, contributing, and continuous learning. Explore my portfolio and experience in web development, software engineering, and more.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  image: {
    domains: ['github.com', 'buymeacoffee.com'],
  },

  nitro: {
    experimental: {
      openAPI: true,
    },
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
