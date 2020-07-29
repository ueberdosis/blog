<template>
    <div class="o-page">
      <div class="o-page__inner">
        <main class="o-page__content">
          <Section>
            <g-link to="/" class="o-page__title">
              {{ $static.metadata.siteName }}
            </g-link>
          </Section>

          <slot/>

        </main>
        <footer class="o-page__footer">
          <PageFooter />
        </footer>
      </div>

      <script async defer src="https://data.blog.ueber.io/latest.js"></script>
      <noscript><img src="https://data.blog.ueber.io/noscript.gif" alt=""/></noscript>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" src="~/assets/sass/main.scss"></style>

<script>
import PageFooter from '@/components/PageFooter'
import Section from '@/components/Section'

export default {

  components: {
    PageFooter,
    Section,
  },

}
</script>