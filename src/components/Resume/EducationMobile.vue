<style lang="scss">
@import '@/scss/subpage';
@import '@/scss/buttons';
@import '@/scss/resume';
.mobile-header {
  // color: #29888f;
}
</style>

<template>
  <div class="subpage resume education">
    <div class="mobile-top-bar">
      <router-link tag="button" to="/resume" class="go-back mobile-top">
        <svg class="icon back"><use href="#back"></use></svg>
      </router-link>
      <h1 class="mobile-header">Education</h1>
      <button class="search-page mobile-top">
        <svg class="icon menu"><use href="#mobile-menu"></use></svg>
      </button>
    </div>
    <section class="resume-content content-container">
      <div class="edu">
        <h2 class="title">Master of Professional Studies <br/> User Experience</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>Maryland Institute College of Art</h3>
            <p class="years"><em>2020-2021</em></p>
            <ul class="resume-list edu">
              <li><span>User Research & Rapport Building</span></li>
              <li><span>Design Principals/Design Thinking</span></li>
              <li><span>Design Sprint Metholodology</span></li>
              <li><span>Wireframes, Prototyping, Finalizing Deliverables</span></li>
              <li><span>Empathizing to the Max!</span></li>
              <li><span>Persona Mapping, Story Mapping, User Stories</span></li>
              <li><span>Diving deep into User Psychology</span></li>
              <li><span>Providing Accessibility</span></li>
              <li><span>Kickass Research, Design, and Development overall!</span></li>
            </ul>
          </div>
          <!-- <div class="flex separator">
            <div class="border"></div>
          </div>
          <div class="flex last">
            <p>I have never had so much fun in school in my LIFE. This degree was a long time coming, but completely influence after I finished my bachelors.</p>
            <p>User Experience is my greatest passion, and it's always the little things that keep me interested and rarin' to ideate, design, develop, and release new experiences.</p>
            <p>The interest that led to this degree blossomed from my Illustration bachelors, where I knew I wanted to create (originally, I wanted to be a concept artist), but I realized being an artist professionally wasn't want I really desired.</p>
            <p>When I realized I could meld psychology, science, and art as a UXer I knew that's exactly where I wanted to be.</p>
            <p>While I'm not currently in the Video Game industry, that's what led me to this path. Modern video games and systems influence a lot of my feelings about UX trends and execution!</p>
          </div> -->
        </div>
      </div>
      <div class="edu">
        <h2 class="title">Certificate of Web Development</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>Bloc/Thinkful</h3>
            <p class="years"><em>2016-2017</em></p>
            <ul class="resume-list edu">
              <li><span>Agile Development/SCRUM</span></li>
              <li><span>Modern Web Trends</span></li>
              <li><span>Real Time Database & Instant Chat Features</span></li>
              <li><span>HTML5/CSS3/JS</span></li>
              <li><span>Accesibility</span></li>
              <li><span>Responsive Design</span></li>
              <li><span>Continuous Improvement</span></li>
              <li><span>MVC/SPA/PWA</span></li>
            </ul>
          </div>
          <!-- <div class="flex separator">
            <div class="border"></div>
          </div>
          <div class="flex last">
            <p>My mid-life crisis had it's own crisis and landed in my lap when I was 23. I graduated from my BFA and at the end of it was when I realized I didn't want to be a professional artist.</p>
            <p>I realized during my last two semesters that I wanted to be involved in the production of a product, not just the design of it. Ideally, I thought to myself, I wanted to be a UI designer for console and computer games. How could I accomplish that? <strong>Become a developer!</strong></p>
            <p>This realization was ironic because I had done quite a bit of coding in the early days as a kiddo on Neopets (gotta have those fancy pet pages!)</p>
            <p>This certification helped me along the road of becoming a UX person, and I enjoyed bringing one of my favorite childhood past-times back to life!</p>
          </div> -->
        </div>
      </div>
      <div class="edu">
        <h2 class="title">Bachelor of Fine Arts <br/> Illustration</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>University of Wisconsin Eau Claire</h3>
            <p class="years"><em>2010-2015</em></p>
            <ul class="resume-list edu">
              <li><span>Narrative and Editorial practices</span></li>
              <li><span>Expert of Composition, Design, and Execution</span></li>
              <li><span>Oil, Acrylic, and Watercolor painting</span></li>
              <li><span>Woodcut, Linocut, and Silkscreen printing</span></li>
              <li><span>Pen, Liquid Ink, and Graphite drawing</span></li>
              <li><span>Adept in Human Figure drawing</span></li>
              <li><span>Creating visual from concept to finish</span></li>
              <li><span>Comics, Concept Design, Monster Design</span></li>
              <li><span>Video Game Design & Video Game Storyboarding</span></li>
              <li><span>General Inky Badassery</span></li>
            </ul>
          </div>
          <!-- <div class="flex separator">
            <div class="border"></div>
          </div>
          <div class="flex last">
            <p>Becoming an Illustrator was something I didn't know I could do until my Junior year of high school. I was convinced I should go to school for science, or something "useful". When I was accepted into my Illustration program, it all became real and I realized Illustration, and art in general, was too important to me to leave behind.</p>
            <p>Attending the Illustration program at UWEC was a wonderful experience, and while I didn't pursue Illustration as a career I wouldn't trade my BFA for anything.</p>
            <p>My favorite hobby is drawing, and the skills I gained from my BFA are invaluable to me. They've helped me progress as a designer and developer, I am very well-rounded because of them!</p>
          </div> -->
        </div>
      </div>
      <div class="edu">
        <h2 class="title">Bachelor of Arts <br/> German</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>University of Wisconsin Eau Claire</h3>
            <p class="years"><em>2010-2015</em></p>
            <ul class="resume-list edu">
              <li><span>Studied Abroad</span></li>
              <li><span>Ja, ich spreche Deutsch</span></li>
              <li><span>Schadenfreude</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="call-to-action">
        <h3>Enjoying the Vue?</h3>
          <a class="contact-btn email" href="mailto:sam@ratpersona.dev">
            <svg class="icon mobile"><use href="#email"></use></svg>
            <span class="mobile spacer">I'm here to help!</span>
          </a>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // name: 'Education',
  data: function() {
    return {
      // activeItem: '',
      // activeButton: 0,
      // activeCard: 1,
      titles: ['MPS - User Experience', 'Web Development', 'BFA - Illustration', 'BA - German']
    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  methods: {
    // getActive(item) {
    //   this.activeItem = item
    //   this.activeButton = item
    //   this.activeCard = 1
    // },
    // activeButtonResearch(button) {
    //   this.activeCard = button
    // }
  }
}
</script>
