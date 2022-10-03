<script lang="ts" setup>
interface TagsProps {
  tags?: string[]
}

withDefaults(defineProps<TagsProps>(), {
  tags: () => []
})

const tagNameIconsMap = [
  [['php'], 'i-logos-php-alt dark:text-white', '#0078ae'],
  [['html', 'html5'], 'i-logos-html-5', null],
  [['vue', 'vue2', 'vue3'], 'i-logos-vue', '#2c3e50'],
  [['nuxt', 'nuxt3'], 'i-logos-nuxt-icon', null],
  [['typescript', 'ts'], 'i-logos-typescript-icon', null],
  [['vscode'], 'i-vscode-icons-file-type-vscode', null],
  [['bootstrap'], 'i-logos-bootstrap', null],
  [['wordpress'], 'i-logos-wordpress-icon', null],
  [['tailwind', 'tailwindcss'], 'i-logos-tailwindcss-icon', '#0078ae'],
  [['sass', 'scss'], 'i-logos-sass-icon', '#c0392b'],
  [['less'], 'i-logos-less-icon', '#c0392b'],
  [['css'], 'i-logos-css-icon', '#0078ae'],
  [['javascript', 'js'], 'i-logos-javascript', '#f7df1e'],
  [['react', 'reactjs'], 'i-logos-react-icon', '#0078ae'],
  [['angular', 'angularjs'], 'i-logos-angular-icon', '#0078ae'],
  [['node', 'nodejs'], 'i-logos-nodejs-icon', '#0078ae'],
  [['express', 'expressjs'], 'i-logos-express-icon', '#0078ae'],
  [['graphql'], 'i-logos-graphql-icon', '#0078ae'],
  [['gatsby'], 'i-logos-gatsby-icon', '#0078ae'],
  [['webpack', 'webpack4'], 'i-logos-webpack-icon', '#0078ae'],
  [['svelte'], 'i-logos-svelte-icon', '#0078ae'],
  [['vuepress'], 'i-logos-vuepress-icon', '#0078ae'],
  [['netlify'], 'i-logos-netlify-icon', '#0078ae'],
  [['firebase'], 'i-logos-firebase-icon', '#0078ae']
]

const findIcon = (name: string) => {
  return tagNameIconsMap.find(([names]) => names.includes(name))
}
</script>

<template>
  <div v-if="tags.length > 0" class="flex flex-wrap mb-2">
    <div
      v-for="(tag, idx) in tags"
      :key="idx"
      class="m-1 px-2 py-1 rounded-full text-xs! font-semibold shadow-md bg-opacity-40 bg-white dark:(shadow-opacity-30 bg-[#1f1f1f] shadow! shadow-white bg-opacity-80! bg-opacity-80!)"
    >
      <div class="flex flex-row">
        <span class="self-center">#</span>
        <span class="self-center">{{ tag }}</span>
        <i
          v-if="findIcon(tag)"
          class="self-center mx-1"
          :class="findIcon(tag)"
        />
      </div>
    </div>
  </div>
</template>
