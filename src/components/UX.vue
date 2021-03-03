<style lang="scss">
  .ux-portfolio {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 70px 0 50px;
    top: -70px;
    position: relative;
    .portfolio-card {
      position: relative;
      bottom: 50px;
      height: 300px;
      width: 300px;
      border-radius: 5px;
      background-image: url('~@/assets/portfolio/ux/nomader.png');
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
        background-color: #62a88e;
        opacity: .4;
        z-index: 1;
        transition: opacity ease 300ms, border ease 300ms;
      }

      &:nth-child(even) {
        bottom: 0;
        &::after {
          background-color: #0c1930;
          transition: opacity ease 300ms, border ease 300ms;
        }
      }

      .paris-dreamer {
        position: relative;
        z-index: 2;
        font-size: 30px;
        text-transform: capitalize;
        text-shadow: 5px 5px 20px #000;
        transition: font-size ease 300ms, font-family ease 300ms;
      }

      &:hover {
        cursor: pointer;
        &::after {
          opacity: .8;
          border: #3a5d9c solid 20px;
        }
        &:nth-child(even) {
          &::after {
            border: #62a88e solid 20px;
          }
        }
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
    <horizontal-scroll class="ux-portfolio">
      <!-- :style="'background-image: url(@/assets/portfolio/ux/' + card + '.png'" -->

      <div
      class="portfolio-card"
      v-for="card in portfolioItems"
      :key="card">
        <h2 class="paris-dreamer">{{ removeChar(card) }}</h2>
      </div>
    </horizontal-scroll>
  </div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  components: {
    HorizontalScroll
  },
  data: function() {
    return {
      portfolioItems: ['line-webtoon', 'nomader', 'test']
    }
  },
  methods: {
    removeChar(value) {
      value = value.replace(/-/g, ' ');
      return value
    }
  }
}
</script>
