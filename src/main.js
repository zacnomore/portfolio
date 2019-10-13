import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'
import 'normalize.css/normalize.css'
import '~/theme/base.scss'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
