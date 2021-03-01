<style lang="scss">
  @import '@/scss/home.scss';
  .hello {
    transform: skew(7deg, -11deg);
    background: transparent;
    border: none;
    h1 {
      color: #62a88e;
    }
  }
  .content {
    position: relative;
    z-index: 100;
  }
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
          <div>
            <h2>{{ this.caption }}</h2>
          </div>
        </aside>
        <main class="about-me-content">
          <h2 class="name">Sam Nelson - <small>She/They</small></h2>
          <ul class="home-display-options">
            <li class="button">
              <button
              @click="changeActive('about')"
              :class="{ active: active == 'about' }"
              role="button">
                <span>About</span>
              </button>
            </li>
            <li class="button">
              <button
              @click="changeActive('employment')"
              :class="{ active: active == 'employment' }"
              role="button">
                <span>Employment</span>
              </button>
            </li>
            <li class="button">
              <button
              @click="changeActive('education')"
              :class="{ active: active == 'education' }"
              role="button">
                <span>Education</span>
              </button>
            </li>
          </ul>
          <div class="main-info">
            <About v-show="active == 'about'" />
            <Employment v-show="active == 'employment'" />
            <Education v-show="active == 'education'" />
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import About from '@/components/About'
import Employment from '@/components/Employment'
import Education from '@/components/Education'

export default {
  name: 'Home',
  components: {
    About,
    Employment,
    Education
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
