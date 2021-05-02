<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/subpage.scss';
  @import '@/scss/portfolio.scss';
</style>

<template>
  <section class="subpage">
    <div class="content-container">
      <h1>My Work!</h1>
      <div class="portfolio">
        <nav
        class="selection-nav">
          <router-link
          to="/ux-portfolio"
          tag="button"
          class="flex-col ux">
            <svg class="icon"><use href="#ux"></use></svg>
            <h2>UX Projects</h2>
          </router-link>
          <router-link
          to="/design-portfolio"
          tag="button"
          class="flex-col design">
              <svg class="icon"><use href="#design"></use></svg>
              <h2>Design</h2>
          </router-link>
          <router-link
          to="/illustration-portfolio"
          tag="button"
          class="flex-col illustration">
            <svg class="icon"><use href="#illustration"></use></svg>
            <h2>Illustration</h2>
          </router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Portfolio',
  components: {

  },
  data: function() {
    return {
      // title: '',
      // portfolioTitles: ['Humble Brag', 'Inky Goodness', 'Vueru Reporting In!'],
    }
  },
  computed: {
    ...mapState([
      // 'activeItem',
      // 'activeUxItem',
      // 'page',
      // 'innerTitle',
      // 'projectTitle',
      // 'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      // 'ACTIVE_ITEM',
      // 'ACTIVE_NAV',
      // 'ACTIVE_UX_ITEM',
      // 'WHAT_PAGE',
      // 'INNER_TITLE',
      // 'UPDATE_KEY',
    ]),
    // selectItem(index) {
    //     // this.ACTIVE_ITEM(index)
    //     // this.WHAT_PAGE('sub-landing')
    //     // this.INNER_TITLE(index)
    //     let route = '' + index + '-portfolio'
    //     // console.log(route)
    //     router.push(route)
    // },
    getNewTitle() {
      // let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      // this.title = title
    },
  },
  mounted() {
    // this.ACTIVE_NAV('portfolio')
    // this.getNewTitle();
  }
}
</script>
