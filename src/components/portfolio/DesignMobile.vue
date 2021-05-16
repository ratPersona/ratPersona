<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/subpage';
@import '@/scss/portfolio';
</style>

<template>
  <div class="subpage portfolio design-subpage mobile-portfolio">
    <div class="mobile-top-bar mobile">
      <router-link tag="button" to="/portfolio" class="go-back mobile-top">
        <svg class="icon back"><use href="#back"></use></svg>
      </router-link>
      <h1 class="mobile-header">Design</h1>
      <button class="search-page mobile-top">
        <svg class="icon menu"><use href="#mobile-menu"></use></svg>
      </button>
    </div>
    <div class="content-container">
      <router-link
      role="button"
      to="/raindrop"
      class="portfolio-card">
        <h2 class="portfolio-h2">Raindrop Rattery</h2>
        <img class="portfolio-thumb webtoon" src="@/assets/raindrop.png">
      </router-link>
      <router-link
      role="button"
      to="/rsg"
      class="portfolio-card">
        <h2 class="portfolio-h2">Rats, Science, and Genetics</h2>
        <img class="portfolio-thumb" src="@/assets/rsgtrans.png">
      </router-link>
      <router-link
      role="button"
      to="/boopsnoot"
      class="portfolio-card">
        <h2 class="portfolio-h2">Boopsnoot</h2>
        <img class="portfolio-thumb" src="@/assets/BSR.png">
      </router-link>
      <router-link
      role="button"
      to="/magic"
      class="portfolio-card">
        <h2 class="portfolio-h2">Magic Reptiles</h2>
        <img class="portfolio-thumb big" src="@/assets/runcharts.png">
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
      // 'activeItem',
      // 'activeUxItem',
    ]),
  },
  methods: {
    ...mapMutations([
      // 'ACTIVE_UX_ITEM',
      // 'ADD_TITLES',
      // 'WHAT_PAGE',
      // 'INNER_TITLE',
      // 'PROJECT_TITLE'
    ]),
  },
  mounted() {
  }
}
</script>
