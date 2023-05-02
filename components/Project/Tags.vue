<script lang="ts" setup>
interface TagsProps {
  tags?: string[]
}

withDefaults(defineProps<TagsProps>(), {
  tags: () => []
})

const tagNameIconsMap = [
  [['php'], 'logos:php-alt'],
  [['html', 'html5'], 'logos:html-5'],
  [['vue', 'vue2', 'vue3'], 'logos-vue'],
  [['nuxt', 'nuxt3'], 'logos-nuxt-icon'],
  [['typescript', 'ts'], 'logos:typescript-icon'],
  [['vscode'], 'logos:visual-studio-code'],
  [['bootstrap'], 'logos-bootstrap'],
  [['wordpress'], 'logos-wordpress-icon'],
  [['tailwind', 'tailwindcss', 'tw'], 'logos-tailwindcss-icon'],
  [['sass', 'scss'], 'logos:sass'],
  [['less'], 'logos:less'],
  [['css'], 'logos:css-3'],
  [['javascript', 'js'], 'logos:javascript'],
  [['react', 'reactjs'], 'logos:react'],
  [['angular', 'angularjs'], 'logos-angular-icon'],
  [['node', 'nodejs'], 'logos-nodejs-icon'],
  [['svelte'], 'logos-svelte-icon'],
]

const findIcon = (name: string): string => {
  // @ts-ignore
  return tagNameIconsMap.find(([names]) => names.includes(name))?.[1] ?? ''
}
</script>

<template>
  <div v-if="tags.length > 0" class="flex flex-wrap mb-2">
    <div
      v-for="(tag, idx) in tags"
      :key="idx"
      class="m-1 px-2 py-1 rounded-lg text-xs font-semibold bg-dark/5 ring ring-dark/10 dark:(bg-white/10 ring-white/15)"
    >
      <div class="flex flex-row">
        <span class="self-center">#</span>
        <span class="self-center">{{ tag }}</span>
        <Icon
          v-if="findIcon(tag)"
          class="self-center mx-1"
          :name="findIcon(tag)"
        />
      </div>
    </div>
  </div>
</template>
