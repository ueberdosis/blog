// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'description',
    content: 'A digital product design agency, building own products & working for clients.',
  })

  head.meta.push({
    property: 'og:title',
    content: 'überdosis',
  })

  head.meta.push({
    property: 'og:url',
    content: 'https://blog.ueber.io',
  })

  // head.meta.push({
  //   property: 'og:image',
  //   content: 'https://blog.ueber.io/opengraph.png',
  // })

  head.meta.push({
    property: 'og:description',
    content: 'A digital product design agency, building own products & working for clients.',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
