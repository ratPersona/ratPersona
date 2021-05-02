<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio.scss';
</style>

<template>
  <div>
    <UX v-if="desktop" />
    <UXmobile v-else />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import UX from '@/components/portfolio/UX.vue'
import UXmobile from '@/components/portfolio/UXmobile.vue'
import { isBrowser } from 'mobile-device-detect'

export default {
  name: 'UXPortfolio',
  components: {
    UX,
    UXmobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false
    }
  },
  computed: {
    ...mapState([
      // 'activeItem',
      // 'activeUxItem',
      // 'page',
      // 'innerTitle',
      // 'projectTitle',
      // 'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      // 'ACTIVE_ITEM',
      // 'ACTIVE_NAV',
      // 'ACTIVE_UX_ITEM',
      // 'WHAT_PAGE',
      // 'INNER_TITLE',
      // 'UPDATE_KEY',
    ]),
  },
  mounted() {

  }
}
</script>
