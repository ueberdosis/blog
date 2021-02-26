<template>
  <Layout>

    <Section>

      <p>
        Follow along
        If you want to know about new posts, add your email below. Alternatively, you can <g-link to="https://blog.ueber.io/feed.xml">subscribe with RSS</g-link>.
      </p>

      <NewsletterForm
        id="d6ab5e0a-5c27-47e1-bad1-e8b8fb869925"
        button-label="Subscribe"
      />

      <ArticlePreview
        v-for="edge in $page.posts.edges" :key="edge.node.id"
        :title="edge.node.title"
        :publishedAt="edge.node.published_at"
        :teaser="edge.node.teaser"
        :link="edge.node.path"
        :author="edge.node.author"
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
        author
        path
      }
    }
  }
}
</page-query>

<script>
import ArticlePreview from '@/components/ArticlePreview'
import Section from '@/components/Section'
import NewsletterForm from '@/components/NewsletterForm'

export default {

  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          property: 'og:title',
          content: 'überdosis',
        },
        {
          name: 'description',
          content: 'A digital product design agency, building own products & working for clients.',
        },
        {
          property: 'og:description',
          content: 'A digital product design agency, building own products & working for clients.',
        },
      ],
    }
  },

  components: {
    ArticlePreview,
    Section,
    NewsletterForm,
  },

}
</script>

