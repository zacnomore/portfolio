module.exports = {
  siteName: 'Zachary Svoboda',
  siteUrl: 'https://www.zacharysvoboda.com',
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
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
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