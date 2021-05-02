<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
@import '@/scss/illustration';
</style>


<template>
  <div class="illustration-projects">
    <div class="portfolio illustration">
      <div class="custom-hooper-nav">
        <button @click="slidePrev()" class="btn-left"><svg class="icon"><use href="#back"></use></svg></button>
        <button @click="slideNext()" class="btn-right"><svg class="icon"><use href="#back"></use></svg></button>
      </div>
      <section class="illustration-content content-container">
        <div v-if="activeButton ==  0" class="illustration-each">
          <div class="portfolio monsters-and-maidens">
            <hooper ref="carousel" :itemsToShow="3" :itemsToSlide="1" style="height: 400px" :centerMode="false">
              <slide class="pic-wrapper"><img class="illustration-pic angle" src="@/assets/Angle.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic dark-pals" src="@/assets/DarkPals.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic gungal" src="@/assets/gungal.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic redhead big" src="@/assets/Redhead.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic ret" src="@/assets/Ret.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic smokey" src="@/assets/Smokey.jpg"></slide>
              <slide class="pic-wrapper"><img class="illustration-pic smonster" src="@/assets/Smonster.jpg"></slide>
              <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
              <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
            </hooper>
          </div>
        </div>
        <div v-if="activeButton ==  1" class="illustration-each">
          <div class="portfolio concept-art">
            <hooper :itemsToShow="3" :itemsToSlide="1" style="height: 400px" :centerMode="false">
              <slide><img class="illustration-pic sexy-moth-man" src="@/assets/SexyMothMan.jpg"></slide>
            </hooper>
          </div>
        </div>
        <div v-if="activeButton ==  2" class="illustration-each">
          <div class="portfolio tarot-of-the-rat">
            <hooper :itemsToShow="3" :itemsToSlide="1" style="height: 400px" :centerMode="false">
              <slide><img class="illustration-pic" src="@/assets/prof.jpg"></slide>
            </hooper>
          </div>
        </div>
        <div v-if="activeButton ==  3" class="illustration-each">
          <div class="portfolio doodles">
            <hooper :itemsToShow="3" :itemsToSlide="1" style="height: 400px" :centerMode="false">
              <slide><img class="illustration-pic" src="@/assets/prof.jpg"></slide>
            </hooper>
          </div>
        </div>
      </section>
      <nav class="subpage-bottom-nav portfolio">
        <ul class="internal-nav">
          <li
          class="button"
          :class="'button-' + index "
          @click="getActive(index)"
          v-for="(title, index) in titles"
          :key="title">
            <button :class="{active : activeItem == index}" class="bottom">{{ title }}</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
      activeItem: '',
      activeButton: 0,
      activeCard: 1,
      titles: ['Monsters & Maidens', 'Concept Art', 'Tarot of the Rat', 'Doodles']
    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    getActive(item) {
      this.activeItem = item
      this.activeButton = item
      this.activeCard = 1
    },
    activeButtonResearch(button) {
      this.activeCard = button
    }
  }
}
</script>
