<style lang="scss">
  @import '@/scss/subpage.scss';
</style>


<template>
  <div class="contact subpage">
    <div>
      <!-- <h1>Get in Touch!</h1> -->
      <Contact :class="{'content-container': !desktop}" />
    </div>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
import { isBrowser } from 'mobile-device-detect'

export default {
  name: 'ContactView',
  components: {
    Contact
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false,
      title: '',
      storeTitles: ['Send me smoke signals.', 'Carrier pigeon at the ready!', 'Get in touch!'],
    }
  },
  methods: {
    getNewTitle() {
      let title = this.storeTitles[Math.floor(Math.random() * this.storeTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
