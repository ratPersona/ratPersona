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
  .cancel-btn {
    position: absolute;
    right: 90px;
    top: 230px;
    z-index: 1;
    background: $green;
    border: none;
    padding: 12px 12px 10px;
    border-radius: 200em;
    transition: background 300ms ease;
    .icon {
      position: relative;
      // left: -1px;
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
    v-if="page !== ''"
    class="back-btn"
    @click="selectItem('landing')">
      <svg class="icon"><use href="#back"></use></svg>
    </button>
    <button
    v-if="page !== ''"
    class="cancel-btn"
    @click="selectItem('sub-landing')">
      <svg class="icon"><use href="#cancel"></use></svg>
    </button>
    <h1 v-if="page == 'landing'" class="portfolio-title">
      {{ this.title }}
    </h1>
    <h1 v-else class="portfolio-title">
      {{ this.title }}
    </h1>
    <div class="portfolio">
      <aside
      v-show="page == 'landing'"
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

      <main class="projects" v-show="activeItem !== 'landing'">
        <section>
          <UX class="ux-projects" :class="[{active: activeItem === 'UX Projects'}]" v-if="activeItem == 'UX Projects'"/>
          <Design class="design-projects" :class="[{active: activeItem === 'Design'}]" v-if="activeItem == 'Design'"/>
          <Illustration class="illustration-projects" :class="[{active: activeItem === 'Illustration'}]" v-if="activeItem == 'Illustration'"/>
        </section>
      </main>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import UX from '@/components/portfolio/UX.vue'
import Design from '@/components/portfolio/Design.vue'
import Illustration from '@/components/portfolio/Illustration.vue'

export default {
  name: 'Portfolio',
  components: {
    UX,
    Design,
    Illustration
  },
  data: function() {
    return {
      title: '',
      portfolioTitles: ['Humble Brag', 'Inky Goodness', 'Vueru Reporting In!'],
      activeItem: '',
    }
  },
  computed: {
    ...mapState([
      'page',
      'innerTitle',
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'WHAT_PAGE',
      'INNER_TITLE',
      'UPDATE_KEY',
    ]),
    getNewTitle() {
      if(this.page == 'landing') {
        let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
        this.title = title
      } else {
        this.INNER_TITLE(this.activeItem)
        this.title = this.innerTitle
      }
    },
    selectItem(index) {
        this.activeItem = index
        this.WHAT_PAGE(this.activeItem)
        this.getNewTitle()
        this.UPDATE_KEY(this.componentKey += 1)
    },
    returnToLanding() {
      this.WHAT_PAGE('landing')
    },
    closePortfolioPage(){
      this.WHAT_PAGE('sub-landing')
    }
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
