<style lang="scss">
  @import '@/scss/home.scss';
</style>

<template>
  <section id="home" class="home">
    <div class="content-container content">
      <div class="about">
        <aside>
          <button
          class="hello"
          role="button"
          @click="getNewGreeting()">
            <h1 class="header">
              {{ this.hello }}!
            </h1>
          </button>
          <div class="image">
            <img class="home-pic" src="@/assets/prof.jpg">
            <span class="background"></span>
          </div>
          <div class="desktop">
            <h2 class="name">Sam(b) Nelson <small>She/They</small></h2>
            <!-- <h2>{{ this.caption }}</h2> -->
          </div>
        </aside>
        <main class="about-me-content">
          <div class="main-info desktop">
            <div class="info-each">
              <div>
                <svg class="icon ux"><use href="ux"></use></svg>
                <h3>UX Crusader</h3>
              </div>
              <p>See my latest</p>
              <router-link
              class="home-btn"
              tag="button"
              to="/portfolio">UX Project</router-link>
            </div>
            <div class="info-each">
              <div>
                <svg class="icon portfolio"><use href="portfolio"></use></svg>
                <h3>Artist</h3>
              </div>
              <p>Check out my</p>
              <router-link
              class="home-btn"
              tag="button"
              to="/portfolio">Kickass Portfolio</router-link>
            </div>
            <div class="info-each">
              <div>
                <svg class="icon contact"><use href="contact"></use></svg>
                <h3>Got some Qs?</h3>
              </div>
              <!-- <p>Check out my</p> -->
              <router-link
              class="home-btn"
              tag="button"
              to="/portfolio">Holler at me</router-link>
            </div>
            <!-- <p>I'm an empathy-driven human being (or celestial deity) who loves animals, video games, the human experience, and art!</p> -->
            <!-- <p>I advocate for ecology, mental health, social justice, and accessibility. Sometimes I get mad at people on the internet, usually regarding one of these things, but otherwise I'm vibin at home with my pet posse.</p> -->
            <!-- <p>I love rewatching shows like Gilmore Girls and Bob's Burgers (no joke, I have a reference for any situation from these shows), and I enjoy anything to do with magical, fantasy, cringy ghost/vampire/werewolf/fairy romance. I own it.</p> -->
            <!-- <p>If my hobbies and professional goals/interests were a venn diagram, they'd basically make a circle. I love code and User Experience, I dabble in things like security penetration for fun and I spend my free time catching up on UX trends.</p> -->
            <!-- <p>My bachelor's degree is in Illustration, and I continue to hone those skills along with design. My master's is in User Experience and I couldn't be more in love with an area of study!</p> -->
            <!-- <p>Get at me! The worst that can happen is I say something mean about you on Twitter or bore you to death with reptile talk.</p> -->
          </div>
          <div class="main-info mobile">
            <p>An <strong>empathy-driven</strong> human (or cthulhuian terror.)</p>
            <p>Lover of <strong>Ecology</strong>, <strong>Mental Health</strong>, <strong>Social Justice</strong>, and <strong>Accessibility</strong>.</p>
            <p>Enthusiast of <strong>Rats & Reptiles</strong>, <strong>Video Games</strong>, and <strong>Art</strong>.</p>
            <p>Catch me <strong>drawing demon girls</strong>, <strong>vending at reptile shows</strong>, <strong>sharing new science with my friends</strong>, and <strong>spinning yarn in my back yard</strong>.</p>
            <p>Want to see my <router-link to="/portfolio">kickass portfolio</router-link> or the fruit of my <router-link to="/education">blood, sweat, and tears</router-link>?</p>
            <p>Or, if you want, just <router-link to="/contact">holler at me</router-link>!</p>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      hello: '',
      greetings: ['Hello', 'Bonjour', 'Salut', 'Hola', '¿Qué tal?', 'Zdravstvuyte', 'Privet', 'Nǐn hǎo', 'Salve', 'Ciao', 'Konnichiwa', 'Yō', 'Guten Tag', 'Hallo', 'Olá', 'Anyoung', 'Ahlan', 'Goddag', 'Halløj', 'Shikamoo', 'Habari', ],

      caption: '',
      sambCaptions: ['User Experience Bard', 'Crazy Rat Lady', 'Coffee Addict', 'Neo-Druid'],

      active: 'about',
    }
  },
  methods: {
    getNewGreeting() {
      let greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)]
      this.hello = greeting
    },
    getNewCaption() {
      let caption = this.sambCaptions[Math.floor(Math.random() * this.sambCaptions.length)]
      this.caption = caption
    },
    changeActive(active) {
      this.active = active
    }
  },
  mounted() {
    this.getNewGreeting();
    this.getNewCaption();
  }
}

</script>
