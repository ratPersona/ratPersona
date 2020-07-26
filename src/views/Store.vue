<style lang="scss">
  @import '@/scss/subpage.scss';
</style>


<template>
  <div class="store subpage">
    <h1>{{ this.title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Store',
  components: {

  },
  data: function() {
    return {
      title: '',
      storeTitles: ['Support my reptile problem.', 'Pls gib dollars.', 'Enjoy some art! It comes in lots of forms!'],
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
