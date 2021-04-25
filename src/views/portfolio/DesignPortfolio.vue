<style lang="scss">
  // @import '@/scss/samnagerie.scss';
  @import '@/scss/modal.scss';
</style>

<template>
  <div class="subpage">
    <Soon />
  </div>
</template>

<script>
import Soon from '@/views/ComingSoon.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Design',
  components: {
    Soon
  },
  data: function() {
    return {

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
