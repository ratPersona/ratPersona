<style lang="scss">
  @import '@/scss/modal.scss';
</style>

<template>
  <div class="subpage">
    <Illustration v-if="desktop" />
    <IllustrationMobile v-else />
  </div>
</template>

<script>
import Illustration from '@/components/portfolio/Illustration.vue'
import IllustrationMobile from '@/components/portfolio/IllustrationMobile.vue'
import { mapMutations } from 'vuex'
import { isBrowser } from 'mobile-device-detect'

export default {
  components: {
    Illustration,
    IllustrationMobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false
    }
  },
  methods: {
    selectItem(index) {
        this.activeItem = index;
    },
    ...mapMutations([
      'ACTIVE_NAV'
    ]),
  },
  mounted() {
    // this.ACTIVE_NAV('samnagerie')
    // this.getNewTitle();
  }
}
</script>
