<template>
  <Layout>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query {
  post: post(path: "/post/test") {
    id
    title
    content
  }
}
</page-query>