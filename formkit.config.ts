import { createAutoAnimatePlugin } from '@formkit/addons'
import { type DefaultConfigOptions as FormKitConfig, createInput } from '@formkit/vue'

// Custom Input
import FKTurnstile from '~/components/FormKit/FKTurnstile.vue'

const config: FormKitConfig = {
  inputs: {
    turnstile: createInput(FKTurnstile),
  },
  plugins: [createAutoAnimatePlugin()],
}

export default config
