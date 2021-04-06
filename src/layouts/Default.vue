<template>
    <div class="o-page">
      <div class="o-page__inner">
        <main class="o-page__content">
          <Section>
            <g-link to="/" class="o-page__title">
              {{ $static.metadata.siteName }}
            </g-link>
            <span class="o-page__description">
              a digital product company
            </span>
          </Section>

          <slot/>

        </main>
        <footer class="o-page__footer">
          <PageFooter />
        </footer>
      </div>
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
import iframeResize from 'iframe-resizer/js/iframeResizer'
import PageFooter from '@/components/PageFooter'
import Section from '@/components/Section'

export default {

  components: {
    PageFooter,
    Section,
  },

  mounted() {
    iFrameResize()
  }

}
</script>