<style lang="scss">
  @import '@/scss/navigation.scss';
  // .fancy {
  //   font-family: 'Paris Dreamer';
  // }
</style>

<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/lifestyle">Lifestyle</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/bvlog">B/Vlog</router-link>
    <router-link to="/samnagerie">Samnagerie</router-link>
    <!-- <button @click="randomize()" class="random">Down the Rabbit Hole</button> -->
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
