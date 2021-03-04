// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

module.exports = {
  siteName: 'überdosis',
  siteUrl: 'https://blog.ueber.io/',
  titleTemplate: '%s – überdosis',
  icon: './src/assets/images/favicon.png',
  port: 3000,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/blog',
        path: '**/*.md'
      }
    },
    {
      use: 'gridsome-plugin-simple-analytics',
      options: {
        domain: 'data.blog.ueber.io',
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post'],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: 'überdosis blog',
          description: 'A digital product design agency, building own products & working for clients.',
          language: 'en',
          // TODO: Should work, but doesn’t.
          // https://github.com/onecrayon/gridsome-plugin-feed
          // https://www.npmjs.com/package/feed
          favicon: './src/assets/images/favicon.png',
        },
        // === All options after this point show their default values ===
        // Optional; opt into which feeds you wish to generate, and set their output path
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },
        // Optional: the maximum number of items to include in your feed
        maxItems: 10,
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: ['description', 'content'],
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: (node) => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => {
          const content = unified()
            .use(markdown)
            .use(html)
            .processSync(node.content)
            .toString()

          return {
            title: node.title,
            date: node.published_at,
            description: node.teaser,
            content: content,
            author: [
              {
                name: node.author,
              },
            ],
          }
        }
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    Post: '/post/:slug'
  },
}
