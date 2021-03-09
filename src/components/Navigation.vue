<style lang="scss">
  @import '@/scss/navigation.scss';
</style>

<template>
  <nav class="navigation">
    <router-link class="one" to="/">About</router-link>
    <router-link class="two" to="/portfolio" v-on.native:click="this.WHAT_PAGE('landing')">Portfolio</router-link>
    <router-link class="three" to="/contact">Contact</router-link>
    <router-link class="four" to="/bvlog" v-on.native:click="this.WHAT_PAGE('landing')">Blog</router-link>
    <router-link class="five" to="/samnagerie">Samnagerie</router-link>
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
