import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeButton: 0,
    activeReset: '',
    activeItem: '',
    activeNav: '',
    buttonTitle: '',
    titles: [],
    page: 'landing',
    innerTitle: '',
    projectTitle: '',
    componentKey: 0,
  },
  getters: {
    getActiveButton: state => state.activeButton
  },
  mutations: {
    ACTIVE_ITEM: (state, active) => {
      state.activeItem = active
    },
    ACTIVE_NAV: (state, nav) => {
      state.activeNav = nav
    },
    ACTIVE_UX_ITEM: (state, item) => {
      state.activeUxItem = item
    },
    ACTIVE_BUTTON: (state, activeButton) => {
      state.activeButton = activeButton
    },
    INNER_TITLE: (state, title) => {
      state.innerTitle = title
    },
    PROJECT_TITLE: (state, projectTitle) => {
      state.projectTitle = projectTitle
    },
    ADD_TITLES: (state, titles) => {
      state.titles = titles
    },
    GET_TITLE: (state, title) => {
      state.buttonTitle = title
    },
    WHAT_PAGE: (state, template) => {
      state.page = template
    },
    UPDATE_KEY: (state, key) => {
      state.componentKey = key
    },
  },
  actions: {
    back() {
      router.go(-1)
    },
    setActiveButton({commit}, button) {
      commit('ACTIVE_BUTTON', button)
    }
  },
  modules: {
  }
})
