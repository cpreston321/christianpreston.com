import { transformerDirectives, transformerVariantGroup } from 'unocss'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/formkit.css'],

  runtimeConfig: {
    discordWebhookUrl: '',
    turnstile: {
      secretKey: undefined
    },
    public: {
      language: 'en-US',
      siteUrl: 'https://christianpreston.com',
      siteName: 'Christian Preston',
      siteDescription: 'I’m a self-taught software developer based in Indianapolis, IN, with a passion for collaboration, building, contributing, and continuous learning. Explore my portfolio and experience in web development, software engineering, and more.',
      turnstile: {
        siteKey: '1x00000000000000000000AA'
      }
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg' }
      ]
    }
  },

  /**
   * Nuxt SEO Kit Layer
   * @see https://github.com/harlan-zw/nuxt-seo-kit
   */
  extends: [
    'nuxt-seo-kit',
    'nuxt-umami'
  ],

  appConfig: {
    umami: {
      ignoreLocalhost: true,
      version: 2
    }
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
    'nuxt-icon',
    '@nuxtjs/turnstile',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    // '@vueuse/motion/nuxt',
    '@formkit/nuxt',
    '@nuxtjs/color-mode',
    '@nuxthq/studio',
    '@nuxt/devtools'
  ],

  colorMode: {
    classSuffix: ''
  },

  ogImage: {
    defaults: {
      mask: '.nuxt-devtools-toggle'
    }
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

  unocss: {
    uno: true,
    preflight: true,
    webFonts: {
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    },
    typography: true,
    theme: {
      darkMode: 'class',
      animation: {
        keyframes: {
          blob: '{ 0%,100%{ transform: translate(0, 0) scale(1) } 25%{ transform: "translate(20px, -30px) scale(1.1)" } 50%{ transform: translate(0, 40px) scale(1) } 75%{ transform: translate(-30px, -25px) scale(0.9) }}'
        },
        durations: {
          blob: '10s'
        },
        timingFns: {
          blob: 'cubic-bezier(0.25,0.1,0.25,1)'
        },
        counts: {
          blob: 'infinite'
        }
      }
    },

    transformers: [
      transformerVariantGroup(),
      transformerDirectives({
        enforce: 'pre'
      })
    ]
  },

  image: {
    domains: ['github.com', 'buymeacoffee.com']
  }
})
