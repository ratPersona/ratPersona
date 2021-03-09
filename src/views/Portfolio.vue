<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/portfolio.scss';
</style>

<template>
  <section class="subpage">
    <TopNav />
    <Title />
    <div class="portfolio">
      <aside
      v-show="page == 'landing'"
      class="sidebar">
        <button
        @click="selectItem('UX Projects')"
        role="button"
        class="flex-col ux">
          <h2>UX Projects</h2>
        </button>
        <button
        @click="selectItem('Design')"
        role="button"
        class="flex-col design">
          <h2>Design</h2>
        </button>
        <button
        @click="selectItem('Illustration')"
        role="button"
        class="flex-col illustration">
          <h2>Illustration</h2>
        </button>
      </aside>

      <main class="projects" v-show="activeItem !== 'landing'">
        <section>
          <UX class="ux-projects" :class="[{active: activeItem === 'UX Projects'}]" v-if="activeItem == 'UX Projects'"/>
          <Design class="design-projects" :class="[{active: activeItem === 'Design'}]" v-if="activeItem == 'Design'"/>
          <Illustration class="illustration-projects" :class="[{active: activeItem === 'Illustration'}]" v-if="activeItem == 'Illustration'"/>
        </section>
      </main>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TopNav from '@/components/portfolio/global/PortfolioNav.vue'
import Title from '@/components/portfolio/global/PortfolioTitles.vue'

import UX from '@/components/portfolio/UX.vue'
import Design from '@/components/portfolio/Design.vue'
import Illustration from '@/components/portfolio/Illustration.vue'

export default {
  name: 'Portfolio',
  components: {
    TopNav,
    Title,
    UX,
    Design,
    Illustration
  },
  data: function() {
    return {
      activeItem: '',
      previousItem: ''
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
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
    selectItem(index) {
        this.activeItem = index
        this.previousItem = index
        this.ACTIVE_ITEM(index)
        this.ACTIVE_UX_ITEM(index)
        this.WHAT_PAGE('sub-landing')
        this.INNER_TITLE(index)
        this.getNewTitle();
    },
    returnToLanding() {
      this.activeItem = ''
      this.WHAT_PAGE('landing')
    },
    closePortfolioPage(){
      this.activeItem = this.activeReset
      this.ACTIVE_UX_ITEM('')
      this.WHAT_PAGE('sub-landing')
    }
  },
  mounted() {
  }
}
</script>
