import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b72747d0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f6288b60 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _2a3e7324 = () => interopDefault(import('../pages/works/_detail.vue' /* webpackChunkName: "pages/works/_detail" */))
const _77b79246 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b72747d0,
    name: "about"
  }, {
    path: "/works",
    component: _f6288b60,
    name: "works"
  }, {
    path: "/works/:detail",
    component: _2a3e7324,
    name: "works-detail"
  }, {
    path: "/",
    component: _77b79246,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
