<template>
  <Layout>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query($path: String!) {
  post: post(path: $path) {
    id
    title
    content
  }
}
</page-query>