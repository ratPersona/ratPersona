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
            <h2>{{ this.caption }}</h2>
          </div>
        </aside>
        <main class="about-me-content">
          <h2 class="name">Sam Nelson - <small>She/They</small></h2>
          <div class="main-info">
            <p>I'm an empathy-driven human being (or celestial deity) who loves animals, video games, the human experience, and art!</p>
            <p>I advocate for ecology, mental health, social justice, and accessibility. Sometimes I get mad at people on the internet, usually regarding one of these things, but otherwise I'm vibin at home with my pet posse.</p>
            <p>I love rewatching shows like Gilmore Girls and Bob's Burgers (no joke, I have a reference for any situation from these shows), and I enjoy anything to do with magical, fantasy, cringy ghost/vampire/werewolf/fairy romance. I own it.</p>
            <p>If my hobbies and professional goals/interests were a venn diagram, they'd basically make a circle. I love code and User Experience, I dabble in things like security penetration for fun and I spend my free time catching up on UX trends.</p>
            <p>My bachelor's degree is in Illustration, and I continue to hone those skills along with design. My master's is in User Experience and I couldn't be more in love with an area of study!</p>
            <p>Get at me! The worst that can happen is I say something mean about you on Twitter or bore you to death with reptile talk.</p>
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
