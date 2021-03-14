<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects">
    <button
    class="back-btn"
    @click="returnToLanding">
      <svg class="icon"><use href="#back"></use></svg>
    </button>
    <horizontal-scroll class="ux-portfolio">
      <router-link
      role="button"
      to="/ux-project"
      class="portfolio-card">
        <h2 class="paris-dreamer" @click="setItem('Line Webtoon')">Line Webtoon</h2>
      </router-link>
      <router-link
      role="button"
      to="/ux-project"
      class="portfolio-card">
        <h2 class="paris-dreamer" @click="setItem('Nomader')">Nomader</h2>
      </router-link>
      <router-link
      role="button"
      to="/ux-project"
      class="portfolio-card">
        <h2 class="paris-dreamer" @click="setItem('SIMS')">SIMS</h2>
      </router-link>
    </horizontal-scroll>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import router from '@/router/index'

import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  components: {
    HorizontalScroll,
  },
  data: function() {
    return {
      lineWebtoon: [],
      nomader: [],
      SIMS: []
    }
  },
  computed: {
    ...mapState([
      'activeItem',
      'activeUxItem',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_UX_ITEM',
      'ADD_TITLES',
      'WHAT_PAGE',
      'INNER_TITLE',
      'PROJECT_TITLE'
    ]),
    camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    },
    setItem(item) {
      let title = this.camelize(item)
      console.log(title)
      let result = []
      if (title == 'lineWebtoon') {
        result = ['Line Webtoon', 'Research', 'Methodology', 'Design', 'Conclusion']
      } else if (title == 'nomader') {
        result = ['Nomader', 'Research', 'Methodology', 'Design', 'Conclusion']
      } else if (title == 'sIMS') {
        result = ['SIMS', 'Research', 'Methodology', 'Design', 'Conclusion']
      }
      this.ADD_TITLES(result)
      this.ACTIVE_UX_ITEM(item)
      this.WHAT_PAGE('project-page')
      console.log(result)
    },
    returnToLanding(){
      this.activeItem = this.activeReset
      this.ACTIVE_UX_ITEM('')
      this.WHAT_PAGE('landing')
      router.push('/portfolio')
    }
  },
  mounted() {
  }
}
</script>
