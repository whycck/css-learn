import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import cssLearnPlugin from './plugins'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

// Vue.use(cssLearnPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
