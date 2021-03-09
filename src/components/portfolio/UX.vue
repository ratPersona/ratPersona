<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects">
    <horizontal-scroll
    v-show="activeItem == ''"
    class="ux-portfolio">
      <div
      v-for="card in portfolioItems"
      :key="card">
        <button class="portfolio-card" @click="showProject(card)">
          <h2 class="paris-dreamer">{{ removeChar(card) }}</h2>
        </button>
      </div>
    </horizontal-scroll>
    <div>
      <LineWebtoon v-show="activeItem == 'line webtoon'" />
      <Nomader v-show="activeItem == ' nomader'" />
      <SIMS v-show="activeItem == 'SIMS'" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
import LineWebtoon from '@/components/portfolio/LineWebtoon'
import Nomader from '@/components/portfolio/Nomader'
import SIMS from '@/components/portfolio/SIMS'

export default {
  components: {
    HorizontalScroll,
    LineWebtoon,
    Nomader,
    SIMS
  },
  data: function() {
    return {
      portfolioItems: ['line-webtoon', 'nomader', 'SIMS'],
      activeItem: '',
    }
  },
  computed: {
    ...mapState([
      'activeReset',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_ITEM',
      'WHAT_PAGE',
      'PROJECT_TITLE'
    ]),
    removeChar(value) {
      value = value.replace(/-/g, ' ');
      return value
    },
    showProject(item) {
      let newItem = this.removeChar(item)
      this.activeItem = newItem
      this.WHAT_PAGE('project-page')
      this.PROJECT_TITLE(newItem)
    },
    checkActive() {
      if (this.activeReset == 'reset') {
        this.activeItem = ''
        this.ACTIVE_ITEM('')
      }
    }
  },
  mounted() {
    this.checkActive()
  }
}
</script>
