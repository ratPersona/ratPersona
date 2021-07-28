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
            <div class="name">
              <h2>Sam(b) Nelson <br/><small>She/They</small></h2>
            </div>
          </div>
          <div class="skills-n-shit" :class="{second: activeButton ==  1}" v-if="activeButton ==  1">
            <div class="image">
              <img class="home-pic" src="@/assets/prof.jpg">
              <span class="background"></span>
            </div>
            <div class="name">
              <h2>UX<small>,</small> Illustration<small>,</small> Design<small>,</small> Developer</h2>
            </div>
          </div>
          <div class="professional-info" :class="{third: activeButton ==  2}" v-if="activeButton ==  2">
            <div class="image">
              <img class="home-pic" src="@/assets/artist.jpeg">
              <span class="background"></span>
            </div>
            <div class="name">
              <h2>UX<small>,</small> Illustration<small>,</small> Design<small>,</small> Developer</h2>
            </div>
          </div>
          <div class="ecology-info" :class="{fourth: activeButton ==  3}" v-if="activeButton ==  3">
            <div class="image">
              <img class="home-pic" src="@/assets/ecologist.jpeg">
              <span class="background"></span>
            </div>
            <div class="name">
              <h2>Animal Husbandry <small> / </small> Ecologist</h2>
            </div>
          </div>
          <div class="video-game-info" :class="{fifth: activeButton ==  4}" v-if="activeButton ==  4">
            <div class="image">
              <img class="home-pic" src="@/assets/prof.jpg">
              <span class="background"></span>
            </div>
            <div class="name">
              <h2>Pokemon Professor<small> / </small> Foxhound Operative</h2>
            </div>
          </div>
        </aside>
        <main class="about-me-content">
          <div class="about-me-info" :class="{first: activeButton ==  0}" v-if="activeButton ==  0">
            <h3>Let me say 'Hi!' in all the ways!</h3>
            <p>I'm a non-binary (female-presenting) empath who wants to use their skills for good!</p>
            <p>I'm addicted to romance novels/comics and horror movies, so much so I've made a case study on one of my <router-link to="/line-webtoon">favorite comic apps!</router-link></p>
            <p>I have a Bob's Burgers or Gilmore Girl's quote for any situation (if you need one, let me know!) and I speak in memes.</p>
            <p><router-link to="/contact">Let's get acquainted</router-link> and check out my stuff!</p>
          </div>
          <div class="skills-n-shit" :class="{second: activeButton ==  1}" v-if="activeButton ==  1">
            <h3>fsdafds</h3>
            <p>Including but absolutely not limited to:</p>
            <ul class="green-list">
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
            </ul>
            <router-link to="/portfolio">Check out my portfolio!</router-link>
          </div>
          <div class="professional-info" :class="{third: activeButton ==  2}" v-if="activeButton ==  2">
            <h3>Creativity is my passion!</h3>
            <p>I possess a BFA in Illustration and I'm finishing my MPS in User Experience Design. Additionally, I learned developer skills through Thinkful, a part-time bootcamp!</p>
            <p>I love to create and when I'm not at work making wireframes, prototyping, and testing software I'm at home drawing monster girls on my iPad or redesigning my favorite video games.</p>
            <p>My main focus in creativtiy is making the world a better place through enjoyable narratives and accessible design!</p>
            <router-link to="/portfolio">Check out my portfolio!</router-link>
          </div>
          <div class="ecology-info" :class="{fourth: activeButton ==  3}" v-if="activeButton ==  3">
            <h3>Yes, I'm one of those "horse girls".</h3>
            <p>I care very much about animals and I have several species IN my care :).</p>
            <p>I am a rat breeder, a snake keeper, a dragon tamer, a chicken wrangler, a kitty keeper, and a bunny mom!</p>
            <p>My animal journey started out with rats, who are absolutely the reason I get out of bed in the morning!</p>
            <p>Proper care, treatment, and biology for animal keeping is something I've continued to learn about as an adult with exotic pets, and I love talking about it!</p>
            <p>Feel free to <router-link to="/contact">chat with me</router-link> about my available pets, how to care for exotics, or just to get in touch with another animal maniac!</p>
          </div>
          <div class="video-game-info" :class="{fifth: activeButton ==  4}" v-if="activeButton ==  4">
            <h3>Button mash to win!</h3>
            <p>Video games were the primary reason for my interest in the creative arts and tech!</p>
            <p>I enjoy all genres, and my favorites are FPS games (COD and Overwatch), hack & slash (Bayonetta and Killer is Dead), JRPG (Pokemon!!!), and MMORPGs (WOW)!</p>
            <p>I hope to have the opportunity to change the world through video gaming, whether as an independent developer or part of a team.</p>
            <p>I believe there's a lot of potential in the magic of video games and the way they band communities and provide experiences to people.</p>
            <p><router-link to="/portfolio">Take a look at my most recent projects</router-link> to see what I've been meddling with last! I love to redesign video games that I am partial to :)</p>
          </div>
        </main>
      </div>
    </div>

    <nav class="subpage-bottom-nav home-page">
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
