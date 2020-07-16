import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

/** fix重复点击一个跳转的路由会出现报错 */
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
}
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/')
  } else {
    next()
  }
})


export default router
