<template>
  <Layout>
    <Section>
      <Article
        :title="$page.post.title"
        :content="$page.post.content"
        :published-at="$page.post.published_at"
      />
    </Section>
  </Layout>
</template>

<page-query>
query($path: String!) {
  post: post(path: $path) {
    id
    title
    teaser
    slug
    content
    published_at
  }
}
</page-query>

<script>
import Article from '@/components/Article'
import Section from '@/components/Section'

export default {

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        // General
        {
          name: 'description',
          content: this.$page.post.teaser,
        },

        // OpenGraph
        {
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          property: 'og:description',
          content: this.$page.post.teaser,
        },
        {
          property: 'og:image',
          content: `https://blog.ueber.io/images/${this.$page.post.slug}.png`,
        },

        // Twitter
        {
          property: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          property: 'twitter:description',
          content: this.$page.post.teaser,
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:image',
          content: `https://blog.ueber.io/images/${this.$page.post.slug}.png`,
        },
      ],
    }
  },

  components: {
    Article,
    Section,
  },

}
</script>