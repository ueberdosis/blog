<template>
  <Layout>

    <Section>
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
    </Section>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(sortBy: "published_at", order: DESC) {
    edges {
      node {
        id
        title
        teaser
        published_at(format: "YYYY-MM-DD")
        path
      }
    }
  }
}
</page-query>

