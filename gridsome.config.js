// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'überdosis Blog',
  siteUrl: 'https://blog.ueber.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/blog',
        path: '*.md'
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    Post: '/post/:slug'
  }
}
