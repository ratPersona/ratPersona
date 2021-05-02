<style lang="scss">
  @import '@/scss/mixins';
  @import '@/scss/portfolio';
  @import '@/scss/illustration';
</style>
<template>
  <div class="illustration-projects">
    <div class="portfolio illustration">
      <div class="mobile-top-bar">
        <router-link tag="button" to="/resume" class="go-back mobile-top">
          <svg class="icon back"><use href="#back"></use></svg>
        </router-link>
        <h1 class="mobile-header">Illustration</h1>
        <button class="search-page mobile-top">
          <svg class="icon menu"><use href="#mobile-menu"></use></svg>
        </button>
      </div>
      <section class="illustration-content content-container">
        <div class="illustration-each">
          <h2>Monsters and Maidens</h2>
          <div class="portfolio monsters-and-maidens">
            <img class="illustration-pic angle" src="@/assets/Angle.jpg">
            <img class="illustration-pic dark-pals" src="@/assets/DarkPals.jpg">
            <img class="illustration-pic gungal" src="@/assets/gungal.jpg">
            <img class="illustration-pic redhead" src="@/assets/Redhead.jpg">
            <img class="illustration-pic ret" src="@/assets/Ret.jpg">
            <img class="illustration-pic smokey" src="@/assets/Smokey.jpg">
            <img class="illustration-pic smonster" src="@/assets/Smonster.jpg">
          </div>
        </div>
        <div class="illustration-each">
          <h2>Concept Art</h2>
          <div class="portfolio concept-art">
            <img class="illustration-pic sexy-moth-man" src="@/assets/SexyMothMan.jpg">
          </div>
        </div>
        <div class="illustration-each">
          <h2>Tarot of the Rat</h2>
          <div class="portfolio tarot-of-the-rat">
            <img class="illustration-pic" src="@/assets/prof.jpg">
          </div>
        </div>
        <div class="illustration-each">
          <h2>Doodles</h2>
          <div class="portfolio doodles">
            <img class="illustration-pic" src="@/assets/prof.jpg">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // name: 'Illustration',
  data: function() {
    return {

    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  methods: {

  }
}
</script>
