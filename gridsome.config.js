// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
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
    BlogPost: '/:fileInfo__name'
  }
}
