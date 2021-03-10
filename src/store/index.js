import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeReset: '',
    activeItem: '',
    page: 'landing',
    innerTitle: '',
    projectTitle: '',
    componentKey: 0,
  },
  mutations: {
    ACTIVE_ITEM: (state, active) => {
      state.activeItem = active
    },
    ACTIVE_UX_ITEM: (state, item) => {
      state.activeUxItem = item
    },
    INNER_TITLE: (state, title) => {
      state.innerTitle = title
    },
    PROJECT_TITLE: (state, projectTitle) => {
      state.projectTitle = projectTitle
    },
    WHAT_PAGE: (state, template) => {
      state.page = template
    },
    UPDATE_KEY: (state, key) => {
      state.componentKey = key
    },
  },
  actions: {
  },
  modules: {
  }
})
