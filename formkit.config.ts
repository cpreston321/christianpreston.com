import { createAutoAnimatePlugin } from '@formkit/addons'
import { DefaultConfigOptions as FormKitConfig } from '@formkit/vue'

const config: FormKitConfig = {
  plugins: [
    createAutoAnimatePlugin()
  ]
}

export default config
