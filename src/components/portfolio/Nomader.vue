<style lang="scss">
@import '@/scss/portfolio';
@import '@/scss/buttons';

</style>

<template>
  <div class="ux-projects">
    <section class="case-study-content">
      <div class="name">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <!-- <div class="research">
        Content
      </div>
      <div class="method">
        Content
      </div>
      <div class="design">
        Content
      </div>
      <div class="prototype">
        Content
      </div>
      <div class="conclusion">
        Content
      </div> -->
    </section>

    <nav class="subpage-bottom-nav">
      <ul class="internal-nav">
        <li class="button button-one" @click="getTitle('Nomader')">
          <button class="active bottom">Nomader</button>
        </li>
        <li class="button button-two" @click="getTitle('Research')">
          <button class="bottom">Research</button>
          </li>
        <li class="button button-three" @click="getTitle('Methodology')">
          <button class="bottom">Methodology</button>
          </li>
        <li class="button button-four" @click="getTitle('Design')">
          <button class="bottom">Design</button>
        </li>
        <li class="button button-five" @click="getTitle('Conclusion')">
          <button class="bottom">Conclusion</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {

  },
  data: function() {
    return {
      activeItem: '',
      title: 'Nomader'
    }
  },
  methods: {
    getTitle(title) {
      this.title = title
    },
  }
}
</script>
