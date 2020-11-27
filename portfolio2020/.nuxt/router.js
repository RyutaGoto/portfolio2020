import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d3efe17 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _64d6a10f = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _7bacf96d = () => interopDefault(import('../pages/works/_detail.vue' /* webpackChunkName: "pages/works/_detail" */))
const _e6124e48 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6d3efe17,
    name: "about"
  }, {
    path: "/works",
    component: _64d6a10f,
    name: "works"
  }, {
    path: "/works/:detail",
    component: _7bacf96d,
    name: "works-detail"
  }, {
    path: "/",
    component: _e6124e48,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
