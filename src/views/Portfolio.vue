<style lang="scss">
  @import '@/scss/modal.scss';
</style>

<template>
  <div class="portfolio subpage">
    <h1>{{ this.title }}</h1>

    <aside class="sidebar" :class="[{hide: activeItem != 'main'}]">
      <button
      @click="selectItem('ux')"
      role="button"
      class="flex-col ux">
        <h2>UX Projects</h2>
      </button>
      <button
      @click="selectItem('apps')"
      role="button"
      class="flex-col apps">
        <h2>Apps</h2>
      </button>
      <button
      @click="selectItem('illustration')"
      role="button"
      class="flex-col illustration">
        <h2>Illustration</h2>
      </button>
    </aside>
  </div>
</template>

<script>
import UX from '@/components/UX.vue'
// import Reptiles from '@/components/Reptiles.vue'
// import Homesteaders from '@/components/Homesteaders.vue'

export default {
  name: 'Portfolio',
  components: {
    UX
  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Humble Brag', 'I draw mythical creatures & cute girls', "Enjoy all the segues you're in for"],
      activeItem: 'main',
    }
  },
  methods: {
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
    selectItem(index) {
        this.activeItem = index;
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
