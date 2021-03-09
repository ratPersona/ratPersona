<style lang="scss">
  @import '@/scss/modal.scss';
  @import '@/scss/portfolio.scss';

  .back-btn {
    position: absolute;
    left: 90px;
    top: 230px;
    z-index: 1;
    background: $green;
    border: none;
    padding: 12px 12px 10px;
    border-radius: 200em;
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
    .icon {
      position: relative;
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
    v-show="page == 'sub-landing'"
    class="back-btn"
    @click="returnToLanding">
      <svg class="icon"><use href="#back"></use></svg>
    </button>
    <button
    v-show="page == 'project-page'"
    class="cancel-btn"
    @click="closePortfolioPage">
      <svg class="icon"><use href="#cancel"></use></svg>
    </button>
    <div>
      <h1 v-show="page == 'sub-landing'" class="portfolio-title">
        {{ this.innerTitle }}
      </h1>
      <h1 v-show="page == 'project-page'" class="portfolio-title">
        {{ this.projectTitle }}
      </h1>
      <h1 v-show="page == 'landing'" class="portfolio-title">
        {{ this.title }}
      </h1>
    </div>
    <div class="portfolio">
      <aside
      v-show="page == 'landing'"
      class="sidebar">
        <button
        @click="selectItem('UX Projects')"
        role="button"
        class="flex-col ux">
          <h2>UX Projects</h2>
        </button>
        <button
        @click="selectItem('Design')"
        role="button"
        class="flex-col design">
          <h2>Design</h2>
        </button>
        <button
        @click="selectItem('Illustration')"
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
      previousItem: ''
    }
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
      'ACTIVE_ITEM',
      'WHAT_PAGE',
      'INNER_TITLE',
      'UPDATE_KEY',
    ]),
    getNewTitle() {
      let title = this.portfolioTitles[Math.floor(Math.random() * this.portfolioTitles.length)]
      this.title = title
    },
    selectItem(index) {
        this.activeItem = index
        this.previousItem = index
        this.WHAT_PAGE('sub-landing')
        this.INNER_TITLE(index)
        this.getNewTitle();
    },
    returnToLanding() {
      this.activeItem = ''
      this.WHAT_PAGE('landing')
    },
    closePortfolioPage(){
      // this.activeItem = this.previousItem
      this.activeItem = ''
      // this.ACTIVE_ITEM('reset')
      this.WHAT_PAGE('sub-landing')
      // if (this.activeReset == 'reset') {
      //   this.activeItem = ''
      //   this.ACTIVE_ITEM('')
      // }
      // this.UPDATE_KEY(this.componentKey += 1)
    }
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
