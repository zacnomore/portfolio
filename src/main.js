import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'
import 'normalize.css/normalize.css'
import '~/theme/base.scss'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://static.codepen.io/assets/embed/ei.js',
    body: true
  })
}
