<template>
  <div class="c-page-footer">
    <template v-if="gitHubLink">
      <a :href="gitHubLink">Edit on GitHub</a>
      &middot;
    </template>
    Made with ❤ by <a href="https://twitter.com/_ueberdosis" target="_blank">überdosis</a>
  </div>
</template>

<script>
export default {
  computed: {
    gitHubLink() {
      const file = this.$page.post?.fileInfo?.path

      if (file) {
        return `https://github.com/ueberdosis/blog/tree/main/content/blog/${file}`
      }

      return 'https://github.com/ueberdosis/blog'
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>