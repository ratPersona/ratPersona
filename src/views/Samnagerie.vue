<style lang="scss">
  @import '@/scss/samnagerie.scss';
</style>


<template>
  <section class="subpage">
    <h1>{{ this.title }}</h1>
    <div class="samnagerie">
      <aside class="sidebar" :class="[{hide: activeItem != 'main'}]">
        <button @click="selectItem('rats')" role="button" class="flex-col rats">
          <h2>Rats</h2>
        </button>
        <button @click="selectItem('reptiles')" role="button" class="flex-col reptiles">
          <h2>Reptiles</h2>
        </button>
        <button @click="selectItem('homesteaders')" role="button" class="flex-col homesteaders">
          <h2>Homesteaders</h2>
        </button>
      </aside>
      <main class="samb-content">
        <div ref="main" v-show="activeItem === 'main'" :class="[{activeMain: activeItem === 'main'}]">
        </div>
        <div ref="rats" v-show="activeItem === 'rats'" :class="[{active: activeItem === 'rats'}]">
          <main class="samb-content">
            <button @click="selectItem('main')">Back</button>
            <Rats />
            TEST
          </main>
        </div>
        <div ref="reptiles" v-show="activeItem === 'reptiles'" :class="[{active: activeItem === 'reptiles'}]">
          <main class="samb-content">
            <button @click="selectItem('main')">Back</button>
            <Reptiles />
          </main>
        </div>
        <div ref="homesteaders" v-show="activeItem === 'homesteaders'" :class="[{active: activeItem === 'homesteaders'}]">
          <main class="samb-content">
            <button @click="selectItem('main')">Back</button>
            <Homesteaders />
          </main>
        </div>
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
      samnagerieTitles: ['My chickens are cooler than your children.', 'I am the rat queen.', 'Snakes, snuggles, and snacks!'],

      activeItem: 'main',
    }
  },
  methods: {
    getNewTitle() {
      let title = this.samnagerieTitles[Math.floor(Math.random() * this.samnagerieTitles.length)]
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
