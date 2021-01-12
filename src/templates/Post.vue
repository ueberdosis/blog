<template>
  <Layout>
    <Section>
      <Article
        :title="$page.post.title"
        :content="$page.post.content"
        :published-at="$page.post.published_at"
        :author="$page.post.author"
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
    author
    fileInfo {
      path
    }
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
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://blog.ueber.io"
          },
          "headline": this.$page.post.title,
          "image": [
            `https://blog.ueber.io/images/${this.$page.post.slug}.png`
          ],
          "datePublished": this.$page.post.published_at,
          "dateModified": this.$page.post.published_at,
          "author": {
            "@type": "Person",
            "name": this.$page.post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "überdosis",
            "logo": {
              "@type": "ImageObject",
              "url": "https://blog.ueber.io/logo.jpg"
            }
          }
        }
      }],
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
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          name: 'twitter:description',
          content: this.$page.post.teaser,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: `https://blog.ueber.io/images/${this.$page.post.slug}.png`,
        },
        {
          name: 'twitter:site',
          content: '@_ueberdosis',
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