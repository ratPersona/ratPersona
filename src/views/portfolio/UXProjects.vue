<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects subpage">
    <button
    class="cancel-btn"
    @click="closePortfolioPage">
      <svg class="icon"><use href="#cancel"></use></svg>
    </button>
    <div>
      <!-- <h1 class="portfolio-title">
        {{ this.activeUxItem }}
      </h1> -->
      <LineWebtoon v-show="activeUxItem == 'Line Webtoon'" />
      <Nomader v-show="activeUxItem == 'Nomader'" />
      <SIMS v-show="activeUxItem == 'SIMS'" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import router from '@/router/index'

import LineWebtoon from '@/components/portfolio/LineWebtoon'
import Nomader from '@/components/portfolio/Nomader'
import SIMS from '@/components/portfolio/SIMS'

export default {
  components: {
    LineWebtoon,
    Nomader,
    SIMS
  },
  data: function() {
    return {
      // title: 'test'
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
      'ACTIVE_NAV'
    ]),
    closePortfolioPage() {
      this.ACTIVE_UX_ITEM('')
      this.WHAT_PAGE('sub-landing')
      router.push('/ux-portfolio')
    }
  },
  mounted() {
    this.ACTIVE_NAV('portfolio')
  }
}
</script>
