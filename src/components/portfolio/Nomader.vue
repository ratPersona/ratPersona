<style lang="scss">
@import '@/scss/portfolio';
@import '@/scss/buttons';
</style>

<template>
  <div class="ux-projects subpage">
    <button
    class="cancel-btn"
    @click="closePortfolioPage">
      <svg class="icon"><use href="#cancel"></use></svg>
    </button>
    <section class="case-study-content">
      <div v-if="activeButton ==  0" class="study-each name">
        <div class="study-media">
          <img class="nomader-one" src="@/assets/portfolio/ux/nomadermu1.png">
        </div>
        <div class="study-info name-info">
          <h1>Nomader</h1>
          <div class="inner">
            <p>Road trips provide a lot of things, one of the most important being memories. Whether alone, with family, or just a pair of pals; the memories and experiences are the greatest takeaway. Nomader is an app that produces and saves these neato moments in a colorful way! The creation of the Nomader app was the cumulation of the thoughts of a 4 member design team.</p>
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
              <p>Talking to people who plan trips and travel often was an eye-opening experience into today's technologically-influenced trip-planning world.</p>
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
              <p>The team discussed the <strong>MVP</strong> for Nomader and the following was declared:</p>
              <h3>Nomader Minimal Viable Product</h3>
              <ul class="green-list">
                <li><span>A unique travel profile</span></li>
                <li><span>Smart trip curation system</span></li>
                <li><span>Map with on-the-road suggestions for unique stops</span></li>
                <li><span>Game center with social media and advertisement hooks</span></li>
              </ul>
              <p>We knew <em>what</em> we wanted our app to be, but how we needed to tackle the <em>how</em>.</p>
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
              <p>The design team held brainstorming sessions utilizing lightening sketches and crazy 8s to get a feel for the layout of Nomader.</p>
              <p>Collectively, we peiced together the best of these sketches and discussed what sort of screens we would need and how we could tie layouts together.</p>
              <p>We felt it was important to have functionally sound, yet fun design and we wanted to portray that with consistency through the various templates, iconography, and language.</p>
            </div>
            <div v-else-if="activeCard == 2"  class="info-card two" :class="{active : activeCard == 2}">
              <h2>Wireflows</h2>
              <p>I chose to design the trip curation. I sketched out what trip planning might look like and what the flow would be for the user.</p>
              <p>My proposal was that the curation process user 3 actionable screens when making a new trip.</p>
              <ol class="green-list">
                <li><span>Weather along the route sorted by day.</span></li>
                <li><span>Trip activities offered based on personalized interests; displayed at the user's bequest.</span></li>
                <li><span>Route game planning and reviews available in a list corresponding to the places they're going.</span></li>
              </ol>
              <p>My biggest worry was a cluttered interface, especially for a map, and I was very selective on what was shown on the UI.</p>
              <p>I performed sketch tests to find out how to improve these ideas, and I was delighted to hear comments like <em>"The interface looks very neat!"</em></p>
            </div>
            <div v-else-if="activeCard == 3" class="info-card three" :class="{active : activeCard == 3}">
              <h2>Wireframes</h2>
              <p>The group came back together with notes following the sketch testing and we shuffled our sketches around into proper wireframes.</p>
              <p>The wireframes were simple and used to make our content areas more concrete. We began design shortly afterward.</p>
            </div>
            <div v-else-if="activeCard == 4" class="info-card four" :class="{active : activeCard == 4}">
              <h2>Design</h2>
              <p>For our design and prototype we used <strong>Figma</strong>, and while my tool of choice is usually <strong>Adobe XD</strong> I had a kickass experience with Figma and I'll be using it more from now on!</p>
              <p>The team created a mood board showcasing 60s aesthetic and features from various travelling apps; simple, complex, or somewhere in between.</p>
              <p>Hashing out the preliminary design ideas, I stressed I felt it was important for us to be a little outside the box with our design. <em>"Let's break away from current trends!"</em></p>
              <p>We settled on the <strong><a href="https://www.designcuts.com/product/prizefighter-art-deco-display-font/">Prizefighter</a></strong> font for our logo and headings, and <strong>Lato</strong> for our general body text.</p>
              <p>Prizefighter is a callback to vintage signage and had a great optional font that resembled a road; it was an excellent font to work with (and I finally got to use my license, huzzah!)</p>
            </div>
          </div>
        </div>
        <img v-if="activeCard == 1" class="nomader-three sketch" src="@/assets/portfolio/ux/sketch.png">
        <img v-else-if="activeCard == 2" class="nomader-three sketchflow" src="@/assets/portfolio/ux/sketchflow.png">
        <img v-else-if="activeCard == 3" class="nomader-three wireframes" src="@/assets/portfolio/ux/wireframes.png">
        <!-- <img v-else-if="activeCard == 4" class="nomader-three" src="@/assets/portfolio/ux/sketchflow.png"> -->
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
              <h2>Color Palette</h2>
            </div>
            <div v-else-if="activeCard == 2"  class="info-card two" :class="{active : activeCard == 2}">
              <h2>Accessibility</h2>
            </div>
            <div v-else-if="activeCard == 3" class="info-card three" :class="{active : activeCard == 3}">
              <h2>Template Ideas</h2>
            </div>
            <div v-else-if="activeCard == 4" class="info-card four" :class="{active : activeCard == 4}">
              <h2>Final Design</h2>
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
