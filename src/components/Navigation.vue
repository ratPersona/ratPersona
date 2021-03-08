<style lang="scss">
  @import '@/scss/navigation.scss';
</style>

<template>
  <nav class="navigation">
    <router-link to="/">About</router-link>
    <router-link to="/portfolio" v-on.native:click="this.WHAT_PAGE('landing')">Portfolio</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/bvlog" v-on.native:click="this.WHAT_PAGE('landing')">Blog</router-link>
    <router-link to="/samnagerie">Samnagerie</router-link>
    <!-- <button @click="randomize()" class="random">Down the Rabbit Hole</button> -->
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {

  },
  computed: {
    ...mapState([
      'page',
      'innerTitle',
      'projectTitle',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'WHAT_PAGE',
      'INNER_TITLE',
      'UPDATE_KEY',
    ]),
  }
}
</script>
