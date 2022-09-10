import { defineNuxtConfig } from "nuxt";
import { transformerDirectives, transformerVariantGroup } from "unocss";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
  },
  css: ["@unocss/reset/tailwind.css", "@/assets/formkit.css"],
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
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@formkit/nuxt",
    "@nuxt/content",
    "nuxt-schema-org",
  ],
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },

  /** Module Options */
  schemaOrg: {
    canonicalHost: "https://christianpreston.com",
    defaultLanguage: "en-US",
  },
  unocss: {
    // presets
    uno: true,
    icons: {
      scale: 1.2,
    },
    webFonts: {
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    },
    typography: true,
    theme: {
      animation: {
        keyframes: {
          blob: '{ 0%,100%{ transform: translate(0, 0) scale(1) } 25%{ transform: "translate(20px, -30px) scale(1.1)" } 50%{ transform: translate(0, 40px) scale(1) } 75%{ transform: translate(-30px, -25px) scale(0.9) }}',
        },
        durations: {
          blob: "10s",
        },
        timingFns: {
          blob: "cubic-bezier(0.25,0.1,0.25,1)",
        },
        counts: {
          blob: "infinite",
        },
      },
    },

    transformers: [
      transformerVariantGroup(),
      transformerDirectives({
        enforce: "pre",
      }),
    ],
  },
});
