<template>
    <div class="o-page">
      <div class="o-page__inner">
        <header class="o-page__header">
          <!-- @include('partials.page-header.index') -->

          <g-link to="/">{{ $static.metadata.siteName }}</g-link>

        </header>
        <main class="o-page__content">
          <!-- @isset($user)
            @component('partials.section.index')
              <a class="o-page__title" href="{{ $user->url($domain) }}">
                {{ $user->setting('title', $user->username) }}
              </a>
            @endcomponent
          @endisset
          @yield('content') -->

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
import PageFooter from '@/components/PageFooter'

export default {

  components: {
    PageFooter,
  },

}
</script>