<style lang="scss">
@import '@/scss/subpage';
@import '@/scss/buttons';
@import '@/scss/resume';
</style>

<template>
  <section>
    <Employment v-if="desktop" />
    <EmploymentMobile v-else />
  </section>
</template>

<script>
import Employment from '@/components/resume/Employment.vue'
import EmploymentMobile from '@/components/resume/EmploymentMobile.vue'
import { isBrowser } from 'mobile-device-detect'

export default {
  name: 'Resume',
  components: {
    Employment,
    EmploymentMobile
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false,
    }
  },
}
</script>
