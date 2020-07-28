// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'alternate',
    type: 'application/rss+xml',
    title: 'überdosis blog',
    href: 'https://blog.ueber.io/feed.xml'
  })

  head.link.push({
    rel: 'alternate',
    type: 'application/json',
    title: 'überdosis blog',
    href: 'https://blog.ueber.io/feed.json'
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://blog.ueber.io/' + to.path,
    })
    next()
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
