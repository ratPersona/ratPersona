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
  <nav class="portfolio-top-nav">
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
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  components: {

  },
  data: function() {
    return {

    }
  },
  computed: {
    ...mapState([
    ]),
  },
  methods: {
    ...mapMutations([
    ]),
  },
  mounted() {
  }
}
</script>
