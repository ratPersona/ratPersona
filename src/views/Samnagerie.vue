<style lang="scss">
  // @import '@/scss/samnagerie.scss';
  @import '@/scss/modal.scss';
</style>

<template>
  <section class="subpage">
    <!-- <h1>{{ this.title }}</h1> -->
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
        <div ref="main" :class="[{activeMain: activeItem === 'main'}]"></div>
        <div ref="rats" class="rats inner-content" :class="[{active: activeItem === 'rats'}]">
          <section>
            <button class="back-btn" @click="selectItem('main')"><svg class="icon"><use href="#close"></use></svg></button>
            <Rats />
          </section>
        </div>
        <div ref="reptiles" class="reptiles inner-content" :class="[{active: activeItem === 'reptiles'}]">
          <section>
            <button class="back-btn" @click="selectItem('main')"><svg class="icon"><use href="#close"></use></svg></button>
            <Reptiles />
          </section>
        </div>
        <div ref="homesteaders" class="homesteaders inner-content" :class="[{active: activeItem === 'homesteaders'}]">
          <section>
            <button class="back-btn" @click="selectItem('main')"><svg class="icon"><use href="#close"></use></svg></button>
            <Homesteaders />
          </section>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import Rats from '@/components/samnagerie/Rats.vue'
import Reptiles from '@/components/samnagerie/Reptiles.vue'
import Homesteaders from '@/components/samnagerie/Homesteaders.vue'
import { mapMutations } from 'vuex'

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
    ...mapMutations([
      'ACTIVE_NAV'
    ]),
  },
  mounted() {
    this.ACTIVE_NAV('samnagerie')
    this.getNewTitle();
  }
}
</script>
