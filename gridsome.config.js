module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/**/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-plugin-purgecss'
    }
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}