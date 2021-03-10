<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/portfolio.scss';
</style>

<template>
  <div>
    <h1 v-if="page == 'sub-landing'" class="portfolio-title">
      {{ this.innerTitle }}
    </h1>
    <h1 v-else-if="page == 'project-page'" class="portfolio-title">
      {{ this.projectTitle }}
    </h1>
    <h1 v-else-if="page == 'landing'" class="portfolio-title">
      {{ this.title }}
    </h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  components: {

  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Humble Brag', 'Inky Goodness', 'Vueru Reporting In!'],
    }
  },
  computed: {
    ...mapState([
      'page',
      'innerTitle',
      'projectTitle',
    ]),
  },
  methods: {
    ...mapMutations([
      // 'WHAT_PAGE',
      // 'INNER_TITLE',
    ]),
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
