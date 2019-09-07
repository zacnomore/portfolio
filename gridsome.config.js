module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/**/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
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