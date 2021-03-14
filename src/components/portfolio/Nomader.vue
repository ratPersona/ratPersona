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
        <div class="study-info name-info">
          <div class="inner">
            <p>Road trips provide a lot of things, one of the most important being memories. Whether alone, with family, or just a pair of pals; the memories and experiences are the greatest takeaway. Nomader is an app that produces and saves these neato moments in a colorful way!</p>
            <p>The creation of the Nomader app was the cumulation of the thoughts of a 4 member design team.</p>
            <p>This team was formed by MICA's UX MPS program, during the Prototyping course.</p>
            <p>This app aims to soothe pain points in existing travel apps, provide a collaborative user experience, and make the driving part of a road trip fun and as interesting as the destinations.</p>
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 1" class="study-each research">
        <div class="study-info research-info">
          <div class="research-buttons">
            <div @click="activeButtonResearch(1)" class="inner card one" :class="{active : activeCard == 1}">
              <button>How</button>
            </div>
            <div @click="activeButtonResearch(2)" class="inner card two" :class="{active : activeCard == 2}">
              <button>Who</button>
            </div>
            <div @click="activeButtonResearch(3)" class="inner card three" :class="{active : activeCard == 3}">
              <button>Interviews</button>
            </div>
            <div @click="activeButtonResearch(4)" class="inner card four" :class="{active : activeCard == 4}">
              <button>Conclusion</button>
            </div>
          </div>
          <div class="research-lower">
            <div v-if="activeCard == 1" class="info-card one" :class="{active : activeCard == 1}">
              <h2><em>How might we</em> provide an easy and intuitive travel planning experience?</h2>
              <p>Map applications are easy to use, but don't provide the ingenuity of a personalized algorithm to suggest sights to see and places to stay.</p>
              <p>Travel planning apps can be overwhelming, and it's not always easy to find events tailored to personal taste.</p>
              <p>Nomader needs to be easy to use and intelligent enough to suggest a travel experience for each user.</p>
              <p>By using existing apps as a springboard, the team determined Nomader should not only be more in tune with each of its users, but that it should appeal to the indie and retro nature of travel.</p>
            </div>
            <div v-else-if="activeCard == 2"  class="info-card two" :class="{active : activeCard == 2}">
              <h2>Who is the <em>target user</em>?</h2>
              <p>Users come in all shapes and sizes, and for Nomader 2 proto-personas were created.</p>
              <p>The proto-personas put together were:
                <ol class="green-list">
                  <li><span>The Family Planner</span></li>
                  <li><span>The Hipster Tripper</span></li>
                </ol>
              </p>
              <p>The personas took into account the following:</p>
              <div class="flex-container">
                <div>
                  <h3>The Family Planner</h3>
                  <ul class="green-list">
                    <li><span>Plans around family members of all ages</span></li>
                    <li><span>Needs lists and order</span></li>
                    <li><span>Requires significant details for the trip</span></li>
                  </ul>
                </div>
                <div>
                  <h3>The Hipster Tripper</h3>
                  <ul class="green-list">
                    <li><span>Enjoys spontaneity and flexibility</span></li>
                    <li><span>Likes eclectic events and places</span></li>
                    <li><span>Lives in the moment</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else-if="activeCard == 3" class="info-card three" :class="{active : activeCard == 3}">
              <h2>Was our hypothesis <em>validated</em>?</h2>
              <p>After conducting interviews, the general basis for each proto persona was tweaked to reflect the findings.</p>
              <p>Talking to people who planned trips and travelled often was an eye-opening experience into today's technologically-influenced trip-planning world.</p>
              <p>
                Paint points discussed included:
                <ul class="green-list">
                  <li><span>Cluttered app interfaces</span></li>
                  <li><span>Overwhelming options</span></li>
                  <li><span>Unrelated suggestions</span></li>
                  <li><span>Too many ads for things that didn't interest them</span></li>
                </ul>
              </p>
              <p>In order for Nomader to be successful, these pain points would need clear and positive resolution.</p>
            </div>
            <div v-else-if="activeCard == 4" class="info-card four" :class="{active : activeCard == 4}">
              <h2>Research Conclusion:</h2>
              <p>After gathering all the notes from each interview and noting overlapping interests, pain-points, and goals the team begain to ideate.</p>
              <p>We knew <em>what</em> we wanted our app to be, but how we needed to tackle the <em>how</em></p>
              <p>The team created a mood board showcasing 60s aesthetic and features from various travelling apps; simple, complex, or somewhere in between.</p>
              <p>However, before we could design, we needed to sketch, wireframe, test, rinse and repeat.</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 2" class="study-each method">
        <div class="study-info method-info">
          <div class="method-buttons">
            <div @click="activeButtonResearch(1)" class="inner card one" :class="{active : activeCard == 1}">
              <button>Sketches</button>
            </div>
            <div @click="activeButtonResearch(2)" class="inner card two" :class="{active : activeCard == 2}">
              <button>Wireflows</button>
            </div>
            <div @click="activeButtonResearch(3)" class="inner card three" :class="{active : activeCard == 3}">
              <button>Wireframes</button>
            </div>
            <div @click="activeButtonResearch(4)" class="inner card four" :class="{active : activeCard == 4}">
              <button>Design</button>
            </div>
          </div>
          <div class="method-lower">
            <div v-if="activeCard == 1" class="info-card one" :class="{active : activeCard == 1}">
              <h2>Sketches</h2>
            </div>
            <div v-else-if="activeCard == 2"  class="info-card two" :class="{active : activeCard == 2}">
              <h2>Wireflows</h2>
            </div>
            <div v-else-if="activeCard == 3" class="info-card three" :class="{active : activeCard == 3}">
              <h2>Wireframes</h2>
            </div>
            <div v-else-if="activeCard == 4" class="info-card four" :class="{active : activeCard == 4}">
              <h2>Design</h2>
            </div>
          </div>
        </div>
        <img v-if="activeCard == 1" class="nomader-three" src="@/assets/portfolio/ux/sketch.png">
        <img v-else-if="activeCard == 2" class="nomader-three" src="@/assets/portfolio/ux/sketchflow.png">
        <img v-else-if="activeCard == 3" class="nomader-three wireframes" src="@/assets/portfolio/ux/wireframes.png">
        <img v-else-if="activeCard == 4" class="nomader-three" src="@/assets/portfolio/ux/sketchflow.png">
      </div>

      <div v-else-if="activeButton == 3" class="study-each design">
        <div class="study-info design-info">
          <div class="design-buttons">
            <div @click="activeButtonResearch(1)" class="inner card one" :class="{active : activeCard == 1}">
              <button>Color Palette</button>
            </div>
            <div @click="activeButtonResearch(2)" class="inner card two" :class="{active : activeCard == 2}">
              <button>Accessibility</button>
            </div>
            <div @click="activeButtonResearch(3)" class="inner card three" :class="{active : activeCard == 3}">
              <button>Template Ideas</button>
            </div>
            <div @click="activeButtonResearch(4)" class="inner card four" :class="{active : activeCard == 4}">
              <button>Final Design</button>
            </div>
          </div>
          <div class="design-lower">
            <div v-if="activeCard == 1" class="info-card one" :class="{active : activeCard == 1}">
              <h2>Sketches</h2>
            </div>
            <div v-else-if="activeCard == 2"  class="info-card two" :class="{active : activeCard == 2}">
              <h2>Wireflows</h2>
            </div>
            <div v-else-if="activeCard == 3" class="info-card three" :class="{active : activeCard == 3}">
              <h2>Wireframes</h2>
            </div>
            <div v-else-if="activeCard == 4" class="info-card four" :class="{active : activeCard == 4}">
              <h2>Design</h2>
            </div>
          </div>
        <img class="nomader-four" src="@/assets/portfolio/ux/mockup.png">
      </div>
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
      activeButton: 0,
      activeCard: 1,
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
    activeButtonResearch(button) {
      this.activeCard = button
    }
  }
}
</script>
