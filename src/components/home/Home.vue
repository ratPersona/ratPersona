<style lang="scss">
.wrapper {
  // position: relative;
  width: 100%;
  margin-left: 20px;
  margin-right: 10px;
  .home-page {
    width: 98%;
    margin: auto;
    right: -20px;
  }
}
</style>

<template>
  <div class="wrapper">
    <div class="content-container content">
      <div class="about">
        <aside>
          <div class="about-me-info" :class="{first: activeButton ==  0}" v-if="activeButton ==  0">
            <div class="image">
              <button
              class="hello"
              role="button"
              @click="getNewGreeting()">
                <h1 class="header">
                  {{ this.hello }}!
                </h1>
              </button>
              <img class="home-pic" src="@/assets/prof.jpg">
              <span class="background"></span>
            </div>
            <!-- <div class="name">
              <h2>Sam(b) Nelson <br/><small>She/They</small></h2>
            </div> -->
          </div>

        </aside>
        <main class="about-me-content">

        </main>
      </div>
    </div>

    <!-- <nav class="subpage-bottom-nav home-page">
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
    </nav> -->
  </div>
</template>
<!-- /* <template lang="pug">
</template> */ -->

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
      titles: ['About Me', 'Skills & Strengths', 'Artist & UX Designer', 'Ecologist', 'Video Game Enthusiast']
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
