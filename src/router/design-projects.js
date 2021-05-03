// import Vue from 'vue'
// import VueRouter from 'vue-router'

export default [
  {
    path: '/boopsnoot-rattery',
    name: 'BSRatters',
    component: () => import(/* webpackChunkName: "rats" */ '../components/portfolio/nomader/Nomader.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/boopsnoot-bakery',
    name: 'BSBakery',
    component: () => import(/* webpackChunkName: "rats" */ '../components/portfolio/nomader/Nomader.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/raindrop',
    name: 'Raindrop Rattery',
    component: () => import(/* webpackChunkName: "rats" */ '../components/portfolio/nomader/Nomader.vue'),
    meta: {
      isPublic:true
    }
  },
]
