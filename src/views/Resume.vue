<style lang="scss">
@import '@/scss/portfolio';
@import '@/scss/buttons';
</style>

<template>
  <div class="resume">
    <section class="case-study-content">
      <div v-if="activeButton ==  0" class="job-each">
        <div class="study-media">
        </div>
        <div class="study-info name-info">
          <div class="inner">
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 1" class="job-each">
        <div class="study-info research-info">
          <div class="research-buttons">

          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 2" class="job-each">

      </div>

      <div v-else-if="activeButton == 3" class="job-each">

      </div>
      <div v-else-if="activeButton == 4" class="job-each">

      </div>
    </section>

    <nav class="subpage-bottom-nav">
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
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import About from '@/components/home/About'
import Employment from '@/components/home/Employment'
import Education from '@/components/home/Education'

export default {
  name: 'Resume',
  components: {
    About,
    Employment,
    Education
  },
  data: function() {
    return {
      activeItem: '',
      activeButton: 0,
      activeCard: 1,
      titles: ['Mayville Engineering Company', 'BrownBoots', 'Americorps', 'C.E.T.L.']
    }
  },
  computed: {
    ...mapState([
      // 'titles',
      // 'activeButton',
    ]),
    ...mapGetters([
      // 'getActiveButton'
    ]),
  },
  watch: {
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
