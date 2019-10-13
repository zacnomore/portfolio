const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/theme/base.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Zachary Svoboda',
  siteUrl: 'https://www.zacharysvoboda.com',
  templates: {
    BlogPost: '/writing/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/**/*.md',
        typeName: 'BlogPost'
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
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}