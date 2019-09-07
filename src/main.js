import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://static.codepen.io/assets/embed/ei.js',
    body: true
  })
}
