<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects">
    <horizontal-scroll class="ux-portfolio">
      <div
      v-for="card in portfolioItems"
      :key="card">
        <router-link
        role="button"
        to="/ux-project"
        class="portfolio-card"
        v-on.native:click="setItem(card)">
          <h2 class="paris-dreamer">{{ removeChar(card) }}</h2>
        </router-link>
      </div>
    </horizontal-scroll>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  components: {
    HorizontalScroll,
  },
  data: function() {
    return {
      portfolioItems: ['line-webtoon', 'nomader', 'SIMS'],
      activeItem: '',
    }
  },
  computed: {
    ...mapState([
      'activeUxItem',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_UX_ITEM',
      'WHAT_PAGE',
      'PROJECT_TITLE'
    ]),
    removeChar(value) {
      value = value.replace(/-/g, ' ');
      return value
    },
    setItem(item) {
      let newItem = this.removeChar(item)
      this.ACTIVE_UX_ITEM(newItem)
    },
    checkActive() {
      if (this.activeReset == 'reset') {
        this.activeItem = ''
        this.ACTIVE_UX_ITEM('')
      }
    }
  },
  mounted() {
  }
}
</script>
