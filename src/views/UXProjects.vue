<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects">
    <LineWebtoon v-show="activeUxItem == 'line webtoon'" />
    <Nomader v-show="activeUxItem == ' nomader'" />
    <SIMS v-show="activeUxItem == 'SIMS'" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import LineWebtoon from '@/components/portfolio/LineWebtoon'
import Nomader from '@/components/portfolio/Nomader'
import SIMS from '@/components/portfolio/SIMS'

export default {
  components: {
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
  computed: {
    ...mapState([
      'activeUxItem',
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_UX_ITEM',
    ]),
  },
  mounted() {
  }
}
</script>
