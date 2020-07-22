<template>
  <Layout>

    <h1>
      Blog
    </h1>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>
        {{ edge.node.title }}
      </h2>
      <p>
        {{ edge.node.teaser }}
      </p>
      <g-link :to="edge.node.path">
        Read
      </g-link>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        teaser
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
