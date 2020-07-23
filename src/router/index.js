import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lifestyle',
    name: 'Lifestyle',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "rats" */ '../views/Projects.vue')
  },
  {
    path: '/samnagerie',
    name: 'Samnagerie',
    component: () => import(/* webpackChunkName: "rats" */ '../views/Samnagerie.vue')
  },
  {
    path: '/bvlog',
    name: 'Bvlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bvlog" */ '../views/Bvlog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
