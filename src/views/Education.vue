<style lang="scss">
@import '@/scss/subpage';
@import '@/scss/buttons';
@import '@/scss/resume';
</style>

<template>
  <section>
    <Education v-if="desktop" />
    <EducationMobile v-else />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Education from '@/components/resume/Education.vue'
import EducationMobile from '@/components/resume/EducationMobile.vue'
import { isBrowser } from 'mobile-device-detect'

export default {
  name: 'Resume',
  components: {
    Education,
    EducationMobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false,
      activeItem: '',
      activeButton: 0,
      activeCard: 1,
      titles: ['Mayville Engineering Company', 'BrownBoots', 'Americorps', 'C.E.T.L.']
    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  watch: {
  },
  methods: {
    // getActive(item) {
    //   this.activeItem = item
    //   this.activeButton = item
    //   this.activeCard = 1
    // },
    // activeButtonResearch(button) {
    //   this.activeCard = button
    // }
  }
}
</script>
