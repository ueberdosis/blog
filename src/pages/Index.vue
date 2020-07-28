<template>
  <Layout>

    <Section>

      <ArticlePreview
        v-for="edge in $page.posts.edges" :key="edge.node.id"
        :title="edge.node.title"
        :publishedAt="edge.node.published_at"
        :teaser="edge.node.teaser"
        :link="edge.node.path"
      />

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
        published_at
        path
      }
    }
  }
}
</page-query>

<script>
import ArticlePreview from '@/components/ArticlePreview'
import Section from '@/components/Section'

export default {

  components: {
    ArticlePreview,
    Section,
  },

}
</script>

