<style lang="scss">
  @import '@/scss/subpage.scss';
</style>


<template>
  <div class="contact subpage">
    <header class="content-header">
      <h1>{{ this.title }}</h1>
    </header>
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  name: 'ContactView',
  components: {
    Contact
  },
  data: function() {
    return {
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
