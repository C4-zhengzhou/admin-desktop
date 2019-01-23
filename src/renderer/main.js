import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/axios'
import ElementUI from 'element-ui'

import 'quill/dist/quill.snow.css'
import 'element-ui/lib/theme-chalk/index.css'

import * as filters from './utils/filter'

Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
