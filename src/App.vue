<style lang="scss">
  @import '@/scss/styles.scss';
</style>

<template>
  <div id="app">
    <header id="nav">
      <Nav v-show="desktop" />
    </header>
    <router-view/>
    <footer>
      <Nav v-show="mobile" />
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data: function() {
    return {
      desktop: true,
      mobile: false
    }
  }
}
</script>
