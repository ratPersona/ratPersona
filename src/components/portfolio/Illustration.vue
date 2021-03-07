<style lang="scss">
@import '@/scss/mixins';
 h1 {
   color: $green;
 }
  .ux-portfolio {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 70px 0 50px;
    top: -70px;
    position: relative;
    .portfolio-card {
      position: relative;
      bottom: 50px;
      height: 300px;
      width: 300px;
      border-radius: 5px;
      background-color: transparent;
      border: none;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        opacity: .4;
        z-index: 1;
        transition: opacity ease 300ms, border ease 300ms;
      }

      .paris-dreamer {
        position: relative;
        z-index: 2;
        font-size: 30px;
        text-transform: capitalize;
        color: $white;
        text-shadow: 5px 5px 20px $black-blue;
      }

      &:hover {
        cursor: pointer;
        .paris-dreamer {
          font-size: 24px;
          font-family: 'Paris Dreamer';
        }
      }
    }
  }
</style>


<template>
  <div class="ux-projects">
    <horizontal-scroll
    v-show="activeItem == ''"
    class="ux-portfolio">
      <div
      v-for="card in portfolioItems"
      :key="card">
        <button class="portfolio-card" @click="showProject(card)">
          <h2 class="paris-dreamer">{{ removeChar(card) }}</h2>
        </button>
      </div>
    </horizontal-scroll>
    <div>
      <LineWebtoon v-show="activeItem == 'line webtoon'" />
      <Nomader v-show="activeItem == ' nomader'" />
      <SIMS v-show="activeItem == 'SIMS'" />
    </div>
  </div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
import LineWebtoon from '@/components/portfolio/LineWebtoon'
import Nomader from '@/components/portfolio/Nomader'
import SIMS from '@/components/portfolio/SIMS'

export default {
  components: {
    HorizontalScroll,
    LineWebtoon,
    Nomader,
    SIMS
  },
  data: function() {
    return {
      portfolioItems: ['line-webtoon', 'nomader', 'SIMS'],
      activeItem: '',
    }
  },
  methods: {
    removeChar(value) {
      value = value.replace(/-/g, ' ');
      return value
    },
    showProject(item) {
      let newItem = this.removeChar(item)
      this.activeItem = newItem
    }
  }
}
</script>
