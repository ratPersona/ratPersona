<style lang="scss">
  @import '@/scss/navigation.scss';
</style>

<template>
  <nav class="navigation">
    <router-link class="one" to="/">
      <div>
        <svg class="icon mobile"><use href="#email"></use></svg>
        About
      </div>
    </router-link>
    <router-link class="two" to="/resume">
      <div>
        <svg class="icon mobile"><use href="#resume"></use></svg>
        Résumé
      </div>
    </router-link>
    <router-link class="three" to="/portfolio" v-on.native:click="this.WHAT_PAGE('landing')">
      <div>
        <svg class="icon mobile"><use href="#email"></use></svg>
        Portfolio
      </div>
    </router-link>
    <router-link class="four" to="/contact">
      <div>
        <svg class="icon mobile"><use href="#email"></use></svg>
        Contact
      </div>
    </router-link>
    <router-link class="five" to="/samnagerie">
      <div>
        <svg class="icon mobile"><use href="#chicken"></use></svg>
        <span class="desktop">Samnagerie</span>
        <span class="mobile">Animals</span>
      </div>
    </router-link>
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
