<style lang="scss">
  @import '@/scss/navigation.scss';
</style>

<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">Sam's Stuff</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/homesteading">Homesteading</router-link>
    <router-link to="/samnagerie">Samnagerie</router-link>
    <button @click="randomize()" class="random">Down the Rabbit Hole</button>
  </nav>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    randomize(){
      //find me something!
    }
  }
}
</script>
