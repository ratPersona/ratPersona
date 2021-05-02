// import Vue from 'vue'
// import VueRouter from 'vue-router'

export default [
  {
    path: '/nomader',
    name: 'Nomader',
    component: () => import(/* webpackChunkName: "rats" */ '../components/portfolio/nomader/Nomader.vue'),
    meta: {
      isPublic:true
    }
  },
]
