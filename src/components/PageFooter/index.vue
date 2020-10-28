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

      return file && `https://github.com/ueberdosis/blog/tree/main/content/blog/${file}`
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>