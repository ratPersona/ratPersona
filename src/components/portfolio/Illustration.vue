<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
.illustration-projects {
  width: 100%;
  height: 100%;
  .illustration {
    height: 100%;
    margin: auto;
    .illustration-content {
      height: 90%;
      .illustration-each {
        height: 90%;
        width: 100%;
        position: absolute;
        top: 0;
      }
    }
  }
}
.illustration-content {
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .illustration-pic {
      position: absolute;
      border-radius: 10px;
      // top: 50px;
      top: 100px;
      &.angle {
        height: 230px;
        width: auto;
      }
      &.ret {
        left: 29%;
        // top: 50px;
        height: 400px;
        width: auto;
      }
      &.smonster {
        right: 0;
        height: 300px;
        width: auto;
      }
      &.redhead {
        left: 0;
        top: 400px;
        // top: 300px;
        height: 230px;
        width: auto;
      }
      &.smokey {
        left: 50%;
        height: 300px;
        width: auto;
      }
      &.gungal {
        left: 13%;
        height: 232px;
        width: auto;
      }
      &.dark-pals {
        left: 66%;
        // top: 200px;
        height: 300px;
        width: auto;
      }
      &.sexy-moth-man {
        right: 0;
        height: 300px;
        width: auto;
      }
    }
  }
}
</style>


<template>
  <div class="illustration-projects">
    <div class="portfolio illustration">
      <!-- <router-link tag="button" to="/employment" class="to-employment">
        <svg class="icon employment"><use href="#employment"></use></svg>
      </router-link>
      <button class="print-me">
        <svg class="print"><use href="#printer"></use></svg>
      </button> -->
      <section class="illustration-content content-container">
        <div v-if="activeButton ==  0" class="illustration-each">
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
        <div v-if="activeButton ==  1" class="illustration-each">
          <div class="portfolio concept-art">
            <img class="illustration-pic sexy-moth-man" src="@/assets/SexyMothMan.jpg">
          </div>
        </div>
        <div v-if="activeButton ==  2" class="illustration-each">
          <div class="portfolio tarot-of-the-rat">
            <img class="illustration-pic" src="@/assets/prof.jpg">
          </div>
        </div>
        <div v-if="activeButton ==  3" class="illustration-each">
          <div class="portfolio doodles">
            <img class="illustration-pic" src="@/assets/prof.jpg">
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

export default {
  // name: 'Illustration',
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
