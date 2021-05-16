<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/subpage';
@import '@/scss/portfolio';
@import '@/scss/design';
</style>

<template>
  <div class="subpage portfolio design-subpage">
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
        to="/raindrop"
        class="portfolio-card">
          <h2 class="portfolio-h2">Raindrop Rattery</h2>
          <img class="portfolio-thumb webtoon" src="@/assets/raindrop.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/rsg"
        class="portfolio-card">
          <h2 class="portfolio-h2">Rats, Science, and Genetics</h2>
          <img class="portfolio-thumb" src="@/assets/rsgtrans.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/boopsnoot"
        class="portfolio-card">
          <h2 class="portfolio-h2">Boopsnoot</h2>
          <img class="portfolio-thumb" src="@/assets/BSR.png">
        </router-link>
      </slide>
      <slide>
        <router-link
        role="button"
        to="/magic"
        class="portfolio-card">
          <h2 class="portfolio-h2">Magic Reptiles</h2>
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

    ]),
  },
  methods: {
    ...mapMutations([

    ]),
  },
  mounted() {
  }
}
</script>
