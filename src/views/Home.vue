<style lang="scss">
  @import '@/scss/home.scss';
  .hello {
    transform: skew(7deg, -11deg);
  }
  .content {
    position: relative;
    z-index: 100;
  }
</style>


<template>
  <section id="home" class="home">
    <div class="content">
      <div class="about">
        <aside>
          <h1 class="hello" @click="getNewGreeting()">{{ this.hello }}!</h1>
          <div class="image">
            <img class="home-pic" src="@/assets/prof.jpg">
            <span class="background"></span>
          </div>
          <div>
            <h2>{{ this.caption }}</h2>
          </div>
        </aside>
        <About />
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import About from '@/components/About'

export default {
  name: 'Home',
  components: {
    About
  },
  data: function() {
    return {
      hello: '',
      greetings: ['Hello', 'Bonjour', 'Salut', 'Hola', '¿Qué tal?', 'Zdravstvuyte', 'Privet', 'Nǐn hǎo', 'Salve', 'Ciao', 'Konnichiwa', 'Yō', 'Guten Tag', 'Hallo', 'Olá', 'Anyoung', 'Ahlan', 'Goddag', 'Halløj', 'Shikamoo', 'Habari', ],

      caption: '',
      sambCaptions: ['User Experience Bard', 'Crazy Rat Lady', 'Coffee Addict', 'Neo-Druid']
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
  },
  mounted() {
    this.getNewGreeting();
    // this.fireflies();
    this.getNewCaption();
  }
}

</script>
