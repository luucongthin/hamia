import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a34828d8 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _3bd00680 = () => interopDefault(import('../pages/detail/index.vue' /* webpackChunkName: "pages/detail/index" */))
const _2df546e4 = () => interopDefault(import('../pages/message/index.vue' /* webpackChunkName: "pages/message/index" */))
const _6b796f9a = () => interopDefault(import('../pages/notification/index.vue' /* webpackChunkName: "pages/notification/index" */))
const _04dcd317 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _bb0ea15a = () => interopDefault(import('../pages/account/callback.vue' /* webpackChunkName: "pages/account/callback" */))
const _d838db6a = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _c28ebed4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _a34828d8,
      name: "about"
    }, {
      path: "/detail",
      component: _3bd00680,
      name: "detail"
    }, {
      path: "/message",
      component: _2df546e4,
      name: "message"
    }, {
      path: "/notification",
      component: _6b796f9a,
      name: "notification"
    }, {
      path: "/search",
      component: _04dcd317,
      name: "search"
    }, {
      path: "/account/callback",
      component: _bb0ea15a,
      name: "account-callback"
    }, {
      path: "/account/login",
      component: _d838db6a,
      name: "account-login"
    }, {
      path: "/",
      component: _c28ebed4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
