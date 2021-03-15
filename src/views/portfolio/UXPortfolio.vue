<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio.scss';
</style>

<template>
  <div class="subpage">
    <h1 class="portfolio-title">
      {{ this.title }}
    </h1>
    <main class="projects">
      <section>
        <UX class="ux-projects"/>
        <!-- <Design class="design-projects" :class="[{active: activeItem === 'Design'}]" v-if="activeItem == 'Design'"/> -->
        <!-- <Illustration class="illustration-projects" :class="[{active: activeItem === 'Illustration'}]" v-if="activeItem == 'Illustration'"/> -->
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import UX from '@/components/portfolio/UX.vue'
import Title from '@/components/portfolio/global/PortfolioTitles.vue'

export default {
  name: 'UXPortfolio',
  components: {
    UX,
    Title
  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Kickass UX', "Words, straight from the User's mouth!", 'I fight for User rights!'],
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
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.ACTIVE_NAV('portfolio')  
    this.getNewTitle()
  }
}
</script>
