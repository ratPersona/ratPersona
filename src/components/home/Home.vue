
<template>
  <div>
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

        </main>
      </div>
    </div>

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
/* eslint-disable */
export default {
  components: {

  },
  data: function() {
    return {
      activeItem: '',
      activeButton: 0,
      activeCard: 1,

      hello: '',
      greetings: ['Hello', 'Bonjour', 'Salut', 'Hola', '¿Qué tal?', 'Zdravstvuyte', 'Privet', 'Nǐn hǎo', 'Salve', 'Ciao', 'Konnichiwa', 'Yō', 'Guten Tag', 'Hallo', 'Olá', 'Anyoung', 'Ahlan', 'Goddag', 'Halløj', 'Shikamoo', 'Habari', ],

      caption: '',
      sambCaptions: ['User Experience Bard', 'Crazy Rat Lady', 'Coffee Addict', 'Neo-Druid'],

      active: 'about',
      titles: ['Artist', 'UX Guru', 'Ecologist', 'Video Game Enthusiast']
    }
  },
  methods: {
    getActive(item) {
      this.activeItem = item
      this.activeButton = item
      this.activeCard = 1
    },
    activeButtonResearch(button) {
      this.activeCard = button
    },
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
