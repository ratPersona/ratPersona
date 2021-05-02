<style lang="scss">
@import '@/scss/mixins';
@import '@/scss/portfolio';
</style>

<template>
  <div>
    <UX v-if="desktop" />
    <UXmobile v-else />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import router from '@/router/index'
import { isBrowser } from 'mobile-device-detect'


export default {
  components: {

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
    ]),
  },
  methods: {
    ...mapMutations([
      // 'ACTIVE_UX_ITEM',
      // 'WHAT_PAGE',
      // 'ACTIVE_NAV'
    ]),
  },
  mounted() {
    // this.ACTIVE_NAV('portfolio')
  }
}
</script>
