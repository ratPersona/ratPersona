<style lang="scss">
  @import '@/scss/styles.scss';

  .footer {
    position: relative;
    padding: 20px;
    // width: 100%;
  }
</style>

<template>
  <div id="main-app">
    <header id="nav">
      <Nav v-show="desktop" />
    </header>
    <router-view/>
    <footer class="footer">
      <Nav v-show="mobile" />
      <Social v-show="desktop" />
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Navigation.vue'
import Social from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Social
  },
  data: function() {
    return {
      desktop: true,
      mobile: false
    }
  }
}
</script>
