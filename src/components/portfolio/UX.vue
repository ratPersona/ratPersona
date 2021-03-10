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
      'WHAT_PAGE',
      'INNER_TITLE',
      'PROJECT_TITLE'
    ]),
    setItem(item) {
      this.ACTIVE_UX_ITEM(item)
      this.WHAT_PAGE('project-page')
      console.log(item)
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
