<style lang="scss">
  // @import '@/scss/samnagerie.scss';
  @import '@/scss/modal.scss';
</style>

<template>
  <div class="subpage">
    <Design v-if="desktop" />
    <DesignMobile v-else />
  </div>
</template>

<script>
import Design from '@/components/portfolio/Design.vue'
import DesignMobile from '@/components/portfolio/DesignMobile.vue'
import { mapMutations } from 'vuex'
import { isBrowser } from 'mobile-device-detect'

export default {
  // name: 'Design',
  components: {
    Design,
    DesignMobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false
    }
  },
  methods: {
    ...mapMutations([
      // 'ACTIVE_NAV'
    ]),
  },
  mounted() {

  }
}
</script>
