<style lang="scss">
</style>

<template>
  <main>
    <ul class="home-display-options">
      <li><button role="button">About</button></li>
      <li><button role="button">Latest Post</button></li>
      <li><button role="button">Random Factoid</button></li>
    </ul>

    <div v-if="about" class="flex-outer">
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

    <div v-else-if="blog" class="flex-outer">BLOG FEED</div>
    <div v-else-if="random" class="flex-outer">RANDOM</div>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      about: true,
      blog: false,
      random: false

    }
  },
}
</script>
