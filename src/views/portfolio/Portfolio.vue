<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/subpage.scss';
  @import '@/scss/portfolio.scss';
</style>

<template>
  <section class="subpage">
    <div>

      <div class="portfolio">
        <nav
        class="selection-nav">
          <button
          @click="selectItem('ux')"
          role="button"
          class="flex-col ux">
            <h2>UX Projects</h2>
          </button>
          <button
          @click="selectItem('design')"
          role="button"
          class="flex-col design">
            <h2>Design</h2>
          </button>
          <button
          @click="selectItem('illustration')"
          role="button"
          class="flex-col illustration">
            <h2>Illustration</h2>
          </button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import router from '@/router/index'

import UX from '@/components/portfolio/UX.vue'
import Design from '@/components/portfolio/Design.vue'
import Illustration from '@/components/portfolio/Illustration.vue'

export default {
  name: 'Portfolio',
  components: {
    UX,
    Design,
    Illustration
  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Humble Brag', 'Inky Goodness', 'Vueru Reporting In!'],
    }
  },
  computed: {
    ...mapState([
      'activeItem',
      'activeUxItem',
      'page',
      'innerTitle',
      'projectTitle',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_ITEM',
      'ACTIVE_NAV',
      'ACTIVE_UX_ITEM',
      'WHAT_PAGE',
      'INNER_TITLE',
      'UPDATE_KEY',
    ]),
    selectItem(index) {
        // this.ACTIVE_ITEM(index)
        // this.WHAT_PAGE('sub-landing')
        // this.INNER_TITLE(index)
        let route = '' + index + '-portfolio'
        // console.log(route)
        router.push(route)
    },
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.ACTIVE_NAV('portfolio')
    this.getNewTitle();
  }
}
</script>
