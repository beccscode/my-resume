import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Blog from './views/blog'
import Terminal from "@/views/terminal";
import './style.css'
import animation from "@/components/organisms/about-me";

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Blog,
    },
    {
      name: 'Terminal',
      path: '/terminal',
      component: Terminal,
    },
  ],
})
