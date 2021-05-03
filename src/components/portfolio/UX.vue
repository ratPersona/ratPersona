<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/subpage';
@import '@/scss/portfolio';
</style>

<template>
  <div class="subpage portfolio ux-subpage">
    <div class="mobile-top-bar mobile">
      <router-link tag="button" to="/portfolio" class="go-back mobile-top">
        <svg class="icon back"><use href="#back"></use></svg>
      </router-link>
      <h1 class="mobile-header">UX</h1>
      <button class="search-page mobile-top">
        <svg class="icon menu"><use href="#mobile-menu"></use></svg>
      </button>
    </div>
    <hooper :itemsToShow="3" :itemsToSlide="3" style="height: 500px" :centerMode="false">
      <slide>
        <router-link
        role="button"
        to="/line-webtoon"
        class="portfolio-card">
          <h2 class="portfolio-h2">Line Webtoon</h2>
          <img class="portfolio-thumb webtoon" src="@/assets/line-webtoon.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/nomader"
        class="portfolio-card">
          <h2 class="portfolio-h2">Nomader</h2>
          <img class="portfolio-thumb" src="@/assets/nomader-3.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/sims"
        class="portfolio-card">
          <h2 class="portfolio-h2">SIMS</h2>
          <img class="portfolio-thumb" src="@/assets/sims.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/shop-floor"
        class="portfolio-card">
          <h2 class="portfolio-h2">Shop Floor App</h2>
          <img class="portfolio-thumb big" src="@/assets/runcharts.png">
        </router-link>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
  } from 'hooper';
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    HooperNavigation,
    HooperPagination,
    Slide
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
