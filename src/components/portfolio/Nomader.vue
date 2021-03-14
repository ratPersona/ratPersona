<style lang="scss">
@import '@/scss/portfolio';
@import '@/scss/buttons';
</style>

<template>
  <div class="ux-projects">
    <section class="case-study-content">
      <div v-if="activeButton ==  0" class="study-each name">
        <div class="study-media">
          <img class="nomader-one" src="@/assets/portfolio/ux/nomadermu1.png">
        </div>
        <div class="study-info">
          <div class="inner">
            <p>Road trips provide a lot of things, one of the most important being memories. Regardless of the crew whether alone, with family, or just a pair of pals; the memories are what everyone appreciates from their nomadic experience. Nomader is an app that produces and saves these neato moments in a colorful way!</p>
            <p>Other road trip apps that plan or are simply a mapping system provide their own unique experience, but they felt impersonal. Not only that, but they are somewhat limited. Trip curation takes a lot of time, and through Nomader we wanted to give users the feeling that the app recognized them as an individual. Nomader considers the user’s interests through quizzes, algorithm updates, and selections the user makes. The purpose of this is to suggest places for the user to visit or even entire pre-planned trips if they’re feeling spontaneous. It’s a step in the ever-progressing direction of smart devices and their reliability.</p>
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 1" class="study-each research">
        <div class="study-info research-info">
          <div class="inner">
            <h2>What are we looking at?</h2>
            <p>Nomader stemmed from a couple basic thoughts that were molded into a HMW statement:</p>
            <p>How might we design an innovative experience for a crowded traveling app market and reduce the stress of travel planning?</p>
            <p>To solve this, market research and user interest was performed.</p>
            <div>
              <h3>Who is our target?</h3>
              <p>After creating proto-personas, people who could be potential users were interviewed. Based on the response from these interviews, Nomader had a good potential target user base, including:</p>
              <ul class="green-list">
                <li><span>Traveling families.</span></li>
                <li><span>Travellers who want exclusive experiences.</span></li>
                <li><span>People who would like to start travelling.</span></li>
              </ul>
            </div>
            <div>
              <h3>What can we provide?</h3>
              <p></p>
              <ul class="green-list">
                <li><span>djsafl</span></li>
                <li><span>fsdf</span></li>
                <li><span>fsd;kf</span></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <img class="nomader-two map" src="@/assets/portfolio/ux/map.png">
        <img class="nomader-two person one" src="@/assets/portfolio/ux/user.png">
        <img class="nomader-two person two" src="@/assets/portfolio/ux/user.png">
        <img class="nomader-two person three" src="@/assets/portfolio/ux/user.png"> -->
      </div>
      <div v-else-if="activeButton == 2" class="study-each method">
        <img class="nomader-three" src="@/assets/portfolio/ux/sketchflow.png">
      </div>
      <div v-else-if="activeButton == 3" class="study-each design">
        <img class="nomader-four" src="@/assets/portfolio/ux/mockup.png">
      </div>
      <div v-else-if="activeButton == 4" class="study-each prototype">
        Content 4
      </div>
      <div v-else-if="activeButton == 5" class="study-each conclusion">
        Content 5
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

    <!-- <Navigation /> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

// import Navigation from '@/components/portfolio/global/PortfolioNavigation.vue'

export default {
  components: {
    // Navigation
  },
  data: function() {
    return {
      activeItem: '',
      activeButton: 0
      // title: 'Nomader'
    }
  },
  computed: {
    ...mapState([
      'titles',
      // 'activeButton',
    ]),
    ...mapGetters([
      // 'getActiveButton'
    ]),
    // updateButton: {
    //   get: function() {
    //     return this.getActiveButton
    //   }
    // }
  },
  watch: {
    // this.activeButton
  },
  methods: {
    getActive(item) {
      this.activeItem = item
      this.activeButton = item
      // this.$store.dispatch('setActiveButton')
    },
  }
}
</script>
