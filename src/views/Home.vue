<style lang="scss">
  @import '@/scss/home.scss';
  @import '@/scss/buttons';
</style>

<template>
  <section id="home" class="home">
    <Home v-if="desktop" />
    <HomeMobile v-else />
  </section>
</template>

<script>
/* eslint-disable */
import Home from '@/components/home/Home.vue'
import HomeMobile from '@/components/home/HomeMobile.vue'
import { isBrowser } from 'mobile-device-detect'

export default {
  // name: 'Home',
  components: {
    Home,
    HomeMobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false,
    }
  },
  methods: {

  },
  mounted() {
    // this.getNewGreeting();
    // this.getNewCaption();
  }
}

</script>
