<style lang="scss">
  @import '@/scss/bvlog.scss';
</style>


<template>
  <section class="subpage">
    <h1>{{ this.title }}</h1>
    <div class="bvlog">
      <aside class="sidebar" :class="[{hide: activeItem != 'main'}]">
        <button @click="selectItem('blog')" role="button" class="flex-col blog">
          <h2>Blog</h2>
        </button>
        <button @click="selectItem('vlog')" role="button" class="flex-col vlog">
          <h2>Vlog</h2>
        </button>
      </aside>
      <main class="samb-content">
        <div ref="main" v-show="activeItem === 'main'" :class="[{activeMain: activeItem === 'main'}]">
        </div>
        <div ref="blog" v-show="activeItem === 'blog'" :class="[{active: activeItem === 'blog'}]">
          <section class="samb-content">
            <button @click="selectItem('main')">Back</button>
            <Blog />
            TEST
          </section>
        </div>
        <div ref="vlog" v-show="activeItem === 'vlog'" :class="[{active: activeItem === 'vlog'}]">
          <section class="samb-content">
            <button @click="selectItem('main')">Back</button>
            <Vlog />
            TEST
          </section>
        </div>
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
      bvlogTitles: ['Look at me say things about stuff.', 'So many rants to choose from!', 'Basically your dose of glitter and gore.'],

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
