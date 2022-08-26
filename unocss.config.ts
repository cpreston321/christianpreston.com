import {
  defineConfig,
  presetMini,
  presetIcons,
  presetTypography,
  presetWind,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import { presetChroma } from "unocss-preset-chroma";

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetMini(),
    presetChroma(),
    presetWind(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],

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
});
