<style lang="scss">
  @import '@/scss/samnagerie.scss';
</style>


<template>
  <section class="subpage">
    <h1>{{ this.title }}</h1>
    <div class="samnagerie">
      <aside class="sidebar">
        <Rats />
        <Reptiles />
        <Homesteaders />
      </aside>
      <main class="content">
      </main>
    </div>
  </section>
</template>

<script>
import Rats from '@/components/Rats.vue'
import Reptiles from '@/components/Reptiles.vue'
import Homesteaders from '@/components/Homesteaders.vue'

export default {
  name: 'Samnagerie',
  components: {
    Rats,
    Reptiles,
    Homesteaders
  },
  data: function() {
    return {
      title: '',
      samnagerieTitles: ['My chickens are cooler than your children.', 'I am the rat queen.', 'Snakes and snacks!']
    }
  },
  methods: {
    getNewTitle() {
      let title = this.samnagerieTitles[Math.floor(Math.random() * this.samnagerieTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
