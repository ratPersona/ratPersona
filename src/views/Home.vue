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
        <main>
          <div class="flex-outer">
            <h2 class="name">Sam Nelson - <small>She/They</small></h2>
            <div class="flex-inner">
              <section class="resume">
                <h3>Software Developer | UX Guru</h3>
                <div class="edu">
                  <p class="degree">Master of Professional Studies - <strong>User Experience Design</strong></p>
                  <p><em>2020-2021</em> - In Progress!</p>
                </div>
                <div class="edu">
                  <p class="degree">Certificate of Web Development</p>
                  <p><em>2016-2017</em></p>
                </div>
                <div class="edu">
                  <p class="degree">Bachelor of Fine Arts - <strong>Illustration</strong></p>
                  <p><em>2010-2015</em></p>
                </div>
                <div class="edu">
                  <p class="degree">Bachelor of Arts- <strong>German</strong></p>
                  <p><em>2010-2015</em></p>
                </div>
              </section>
              <section class="hobbies">
                <span>User Experience</span>
                <span>Yarn Spinning</span>
                <span>Homesteading</span>
                <span>Druidry</span>
                <span>Artistry</span>
                <span>Rats & Rabbits</span>
                <span>Reptiles</span>
              </section>
            </div>
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
