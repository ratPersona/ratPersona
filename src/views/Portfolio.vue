<style lang="scss">
  @import '@/scss/modal.scss';

  .back-btn {
    position: absolute;
    left: 90px;
    top: 230px;
    z-index: 1;
    background: $green;
    border: none;
    padding: 12px 12px 10px;
    border-radius: 200em;
    transition: background 300ms ease;
    .icon {
      position: relative;
      left: -1px;
      width: 20px;
      height: 20px;
      color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>

<template>
  <section class="subpage">
    <button
    v-if="activeItem !== ''"
    class="back-btn"
    @click="selectItem('')">
      <svg class="icon"><use href="#back"></use></svg>
    </button>
    <h1 v-if="activeItem == 'ux'">UX Pojects</h1>
    <h1 v-else>{{ this.title }}</h1>
    <div class="portfolio">
      <aside
      v-show="activeItem == ''"
      class="sidebar">
        <button
        @click="selectItem('ux')"
        role="button"
        class="flex-col ux">
          <h2>UX Projects</h2>
        </button>
        <button
        @click="selectItem('design')"
        role="button"
        class="flex-col design">
          <h2>Design</h2>
        </button>
        <button
        @click="selectItem('illustration')"
        role="button"
        class="flex-col illustration">
          <h2>Illustration</h2>
        </button>
      </aside>

      <main class="projects" v-show="activeItem !== ''">
        <section
        class="ux-projects"
        :class="[{active: activeItem === 'ux'}]"
        v-if="activeItem == 'ux'">
          <UX />
        </section>
      </main>
    </div>
  </section>
</template>

<script>
import UX from '@/components/portfolio/UX.vue'

export default {
  name: 'Portfolio',
  components: {
    UX
  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Humble Brag', 'I draw mythical creatures & cute girls', "Enjoy all the segues you're in for"],
      activeItem: '',
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
