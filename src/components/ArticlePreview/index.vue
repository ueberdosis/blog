<template>
  <article class="c-article-preview">
    <g-link
      :to="link"
      class="c-article-preview__link"
    >
      <h2 class="is-h3 c-article-preview__title">
        {{ title }}
      </h2>
      <p class="c-article-preview__content">
        {{ teaser }}
      </p>
      <p class="c-article-preview__meta">
        Published
        <time :datetime="publishedAt">
          {{ formattedPublishedAt }}
        </time>
      </p>
    </g-link>
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
    teaser: {
      default: null,
      type: String,
    },
    link: {
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