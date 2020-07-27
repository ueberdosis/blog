<template>
  <Layout>
    <Section>
      <Article
        :title="$page.post.title"
        :content="$page.post.content"
        :published-at="$page.post.published_at"
      />
      <!-- <div v-html="$page.post.content"></div> -->
    </Section>
  </Layout>
</template>

<page-query>
query($path: String!) {
  post: post(path: $path) {
    id
    title
    content
    published_at
  }
}
</page-query>

<script>
import Article from '@/components/Article'
import Section from '@/components/Section'

export default {

  components: {
    Article,
    Section,
  },

}
</script>