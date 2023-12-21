import antfu from '@antfu/eslint-config'

export default antfu(
  { vue: true, typescript: true, unocss: true },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
    },
  },
)
