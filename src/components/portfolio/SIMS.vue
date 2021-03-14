
<style lang="scss">
@import '@/scss/portfolio';
@import '@/scss/buttons';
</style>


<template>
  <div class="ux-projects">
    <section class="case-study-content">
      <div class="name">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <!-- <div class="research">
        Content
      </div>
      <div class="method">
        Content
      </div>
      <div class="design">
        Content
      </div>
      <div class="prototype">
        Content
      </div>
      <div class="conclusion">
        Content
      </div> -->
    </section>

    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/portfolio/global/PortfolioNavigation.vue'

export default {
  components: {
    Navigation

  },
  data: function() {
    return {

    }
  }
}
</script>
