<style lang="scss">
// main {
//   width: 100%;
// }
  h3 {
    text-align: center;
  }
</style>


<template>
  <div class="subpage">
      <main>
        <h3>{{ this.title }}</h3>
      </main>
  </div>
</template>

<script>
export default {
  name: 'Coming Soon',
  components: {
  },
  data: function() {
    return {
      title: '',
      bvlogTitles: ['Nothing yet, come back later.', 'The rats are distracting Sam from finishing her site!', 'BRB, slopping the pigs, will finish this page later.'],
      activeItem: 'main',
    }
  },
  methods: {
    getNewTitle() {
      let title = this.bvlogTitles[Math.floor(Math.random() * this.bvlogTitles.length)]
      this.title = title
    },
    selectItem(index) {
        this.activeItem = index;
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
