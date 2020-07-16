import Vue from 'vue'
import App from './App.vue'
import router from './router'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
