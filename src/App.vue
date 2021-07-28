<style lang="scss">
  @import '@/scss/styles.scss';
  @import '@/scss/fireflies.scss';
  canvas {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .footer {
    position: relative;
    padding: 20px;
  }
  .main-app {

  }
</style>

<template>
  <div id="main-app">
    <!-- <canvas v-show="desktop" id="canvas"></canvas> -->
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <header id="nav">
      <Nav />
    </header>
    <!-- <router-view /> -->
    <router-view :key="componentKey"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { isBrowser } from 'mobile-device-detect'
import Nav from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Nav,
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false
      // mobile: false
    }
  },
  computed: {
    ...mapState([
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'UPDATE_KEY'
    ]),
  },
  mounted() {
    console.log(this.$device)
  }
}
</script>
