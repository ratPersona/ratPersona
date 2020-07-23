<style lang="scss">
  @import '@/scss/bvlog.scss';
</style>


<template>
  <section class="subpage">
    <h1>{{ this.title }}</h1>
    <div class="bvlog">
      <aside class="sidebar">
        <Blog />
        <Vlog />
      </aside>
      <main class="content">
      </main>
    </div>
  </section>
</template>

<script>
import Blog from '@/components/Blog.vue'
import Vlog from '@/components/Vlog.vue'

export default {
  name: 'Samnagerie',
  components: {
    Blog,
    Vlog
  },
  data: function() {
    return {
      title: '',
      bvlogTitles: ['Look at me say things about stuff.', 'So many rants to choose from!', 'Basically your dose of glitter and gore.']
    }
  },
  methods: {
    getNewTitle() {
      let title = this.bvlogTitles[Math.floor(Math.random() * this.bvlogTitles.length)]
      this.title = title
    },
  },
  mounted() {
    this.getNewTitle();
  }
}
</script>
