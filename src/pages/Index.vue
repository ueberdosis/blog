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
        {{ edge.node.date }}
      </p>
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
  posts: allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        teaser
        date(format: "YYYY-MM-DD")
        path
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
