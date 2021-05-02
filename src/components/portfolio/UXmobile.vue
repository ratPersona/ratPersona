<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/subpage';
@import '@/scss/portfolio';
</style>

<template>
  <div class="subpage portfolio ux-subpage mobile-portfolio">
    <div class="mobile-top-bar mobile">
      <router-link tag="button" to="/portfolio" class="go-back mobile-top">
        <svg class="icon back"><use href="#back"></use></svg>
      </router-link>
      <h1 class="mobile-header">UX</h1>
      <button class="search-page mobile-top">
        <svg class="icon menu"><use href="#mobile-menu"></use></svg>
      </button>
    </div>
    <div class="content-container">
      <router-link
      role="button"
      to="/line-webtoon"
      class="portfolio-card">
        <h2 class="paris-dreamer">Line Webtoon</h2>
        <img class="portfolio-thumb" src="@/assets/nomader.png">
      </router-link>
      <router-link
      role="button"
      to="/nomader"
      class="portfolio-card">
        <h2 class="paris-dreamer">Nomader</h2>
        <img class="portfolio-thumb" src="@/assets/nomader.png">
      </router-link>
      <router-link
      role="button"
      to="/sims"
      class="portfolio-card">
        <h2 class="paris-dreamer">SIMS</h2>
        <img class="portfolio-thumb" src="@/assets/sims.png">
      </router-link>
      <router-link
      role="button"
      to="/shop-floor"
      class="portfolio-card">
        <h2 class="paris-dreamer">Shop Floor App</h2>
        <img class="portfolio-thumb" src="@/assets/runcharts.png">
      </router-link>
      <div class="call-to-action">
        <h3>Can't decide what to look at?</h3>
          <router-link class="contact-btn email" to="/nomader">
            <span class="mobile">See my latest project!</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
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
      'ADD_TITLES',
      'WHAT_PAGE',
      'INNER_TITLE',
      'PROJECT_TITLE'
    ]),
    // camelize(str) {
    //   return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    //     return index === 0 ? word.toLowerCase() : word.toUpperCase();
    //   }).replace(/\s+/g, '');
    // },
    // setItem(item) {
    //   let title = this.camelize(item)
    //   console.log(title)
    //   let result = []
    //   if (title == 'lineWebtoon') {
    //     result = ['Line Webtoon', 'Research', 'Methodology', 'Design', 'Conclusion']
    //   } else if (title == 'nomader') {
    //     result = ['Nomader', 'Research', 'Methodology', 'Design', 'Conclusion']
    //   } else if (title == 'sIMS') {
    //     result = ['SIMS', 'Research', 'Methodology', 'Design', 'Conclusion']
    //   }
    //   this.ADD_TITLES(result)
    //   this.ACTIVE_UX_ITEM(item)
    //   this.WHAT_PAGE('project-page')
    //   console.log(result)
    // },
    // returnToLanding(){
    //   this.activeItem = this.activeReset
    //   this.ACTIVE_UX_ITEM('')
    //   this.WHAT_PAGE('landing')
    //   router.push('/portfolio')
    // }
  },
  mounted() {
  }
}
</script>
