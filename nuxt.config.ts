import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
  },
  css: ["~/assets/formkit.css"],
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
  unocss: {
    preflight: true,
  },
});
