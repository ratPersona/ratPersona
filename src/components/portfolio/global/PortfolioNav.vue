<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/portfolio.scss';
</style>

<template>
  <nav class="portfolio-top-nav">
    <button
    v-show="page == 'sub-landing'"
    class="back-btn"
    @click="returnToLanding">
      <svg class="icon"><use href="#back"></use></svg>
    </button>

  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  components: {

  },
  data: function() {
    return {

    }
  },
  computed: {
    ...mapState([
      'page',
      'activeReset',
      'innerTitle',
      'projectTitle',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_ITEM',
      'ACTIVE_UX_ITEM',
      'WHAT_PAGE',
      'INNER_TITLE',
      'UPDATE_KEY',
    ]),
    returnToLanding() {
      this.activeItem = ''
      this.WHAT_PAGE('landing')
    },
    closePortfolioPage(){
      this.activeItem = this.activeReset
      this.ACTIVE_UX_ITEM('')
      this.WHAT_PAGE('sub-landing')
      this.router.go('/portfolio')
    }
  },
  mounted() {
  }
}
</script>
