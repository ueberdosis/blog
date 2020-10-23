<template>
  <article class="c-article">
    <header class="c-article__header">
      <h1 class="c-article__title">
        {{ title }}
      </h1>
      <p class="c-article__meta">
        Published
        <time :datetime="publishedAt">
          {{ formattedPublishedAt }}
        </time>
      </p>
    </header>

    <section class="c-article__content" v-html="content" />

    <footer class="c-article__author" v-if="author">
      {{ author }}
    </footer>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    title: {
      default: null,
      type: String,
    },
    author: {
      default: null,
      type: String,
    },
    content: {
      default: null,
      type: String,
    },
    publishedAt: {
      default: null,
      type: String,
    },
  },

  computed: {
    formattedPublishedAt() {
      return moment(this.publishedAt).format('MMM Do, YYYY')
    },
  }
}
</script>

<style lang="scss" src="./style.scss"></style>