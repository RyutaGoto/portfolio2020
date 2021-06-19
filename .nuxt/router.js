import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4dc5ead8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _dd32c868 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _77ad8e2c = () => interopDefault(import('../pages/works/_detail.vue' /* webpackChunkName: "pages/works/_detail" */))
const _0e56354e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/portfolio2020/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4dc5ead8,
    name: "about"
  }, {
    path: "/works",
    component: _dd32c868,
    name: "works"
  }, {
    path: "/works/:detail",
    component: _77ad8e2c,
    name: "works-detail"
  }, {
    path: "/",
    component: _0e56354e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
