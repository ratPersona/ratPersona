import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic:true
    }
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "rats" */ '../views/Resume.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/employment',
    name: 'Employment',
    component: () => import(/* webpackChunkName: "rats" */ '../components/resume/Employment.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import(/* webpackChunkName: "rats" */ '../components/resume/Education.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/Portfolio.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/ux-portfolio',
    name: 'UXPortfolio',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/UXPortfolio.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/ux-project',
    name: 'UX Project',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/UXProjects.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/illustration-portfolio',
    name: 'Illustration',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/IllustrationPortfolio.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/design-portfolio',
    name: 'Design',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/DesignPortfolio.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/design-project',
    name: 'Design Project',
    component: () => import(/* webpackChunkName: "rats" */ '../views/portfolio/UXProjects.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/samnagerie',
    name: 'Samnagerie',
    component: () => import(/* webpackChunkName: "rats" */ '../views/Samnagerie.vue'),
    meta: {
      isPublic:true
    }
  },
  {
    path: '/bvlog',
    name: 'Bvlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bvlog" */ '../views/Bvlog.vue'),
    meta: {
      isPublic:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
