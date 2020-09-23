import { RouteRecordRaw, createRouter, createWebHistory, Router } from 'vue-router'
import Home from './home'

const routes: RouteRecordRaw[] = [].concat(Home)

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由前置拦截
router.beforeEach((to, from, next) => {
  next()
})

// 路由后置拦截
router.afterEach(() => {
  //
})
export default router
