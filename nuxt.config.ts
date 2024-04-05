// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@unocss/reset/tailwind.css', '@/assets/formkit.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    turnstile: {
      secretKey: undefined,
    },
    public: {
      turnstile: {
        siteKey: '1x00000000000000000000AA',
      },
    },
  },

  $development: {
    hub: {
      remote: true,
    },
  },

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

  site: {
    url: 'https://christianpreston.com',
    name: 'Christian Preston',
    description: 'I’m a self-taught software developer based in Indianapolis, IN, with a passion for collaboration, building, contributing, and continuous learning. Explore my portfolio and experience in web development, software engineering, and more.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  // motion: {
  //   directives: {
  //     'pop-bottom': {
  //       initial: {
  //         y: 100,
  //         opacity: 0
  //       },
  //       enter: {
  //         y: 0,
  //         opacity: 1,
  //         transition: {
  //           delay: 200
  //         }
  //       }
  //     }
  //   }
  // },

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
