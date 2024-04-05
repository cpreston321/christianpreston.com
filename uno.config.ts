import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'
import presetTypography from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans,200,400,700,800',
      },
    }),
    presetTypography(),
  ],

  theme: {
    darkMode: 'class',
    animation: {
      keyframes: {
        blob: '{ 0%,100%{ transform: translate(0, 0) scale(1) } 25%{ transform: "translate(20px, -30px) scale(1.1)" } 50%{ transform: translate(0, 40px) scale(1) } 75%{ transform: translate(-30px, -25px) scale(0.9) }}',
      },
      durations: {
        blob: '10s',
      },
      timingFns: {
        blob: 'ease-in-out',
      },
      counts: {
        blob: 'infinite',
      },
    },
  },

  transformers: [
    transformerVariantGroup(),
    transformerDirectives({
      enforce: 'pre',
    }),
  ],
})
