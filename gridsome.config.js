// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const path = require('path')

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/variables.scss'),
//       ],
//     })
// }

module.exports = {
  siteName: 'überdosis blog',
  siteUrl: 'https://blog.ueber.io/',
  titleTemplate: '%s',
  // icon: './src/assets/images/favicon.ico',
  port: 3000,
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
  },
  // chainWebpack(config) {
  //   // Load variables for all vue-files
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

  //   types.forEach(type => {
  //     addStyleResource(config.module.rule('scss').oneOf(type))
  //   })
  // },
}
