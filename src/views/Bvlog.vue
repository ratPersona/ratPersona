<style lang="scss">
  @import '@/scss/bvlog.scss';
  @import '@/scss/modal.scss';
</style>


<template>
  <section class="subpage">
    <!-- <h1>{{ this.title }}</h1> -->
    <div class="bvlog">
      <aside class="sidebar" :class="[{hide: activeItem != 'main'}]">
        <button @click="selectItem('blog')" role="button" class="flex-col blog">
          <h2>Blog</h2>
        </button>
      </aside>
      <main class="samb-content">
        <div ref="main" :class="[{activeMain: activeItem === 'main'}]">
        </div>
        <div ref="blog" class="blog inner-content" :class="[{active: activeItem === 'blog'}]">
          <section class="blog-content">
            <button class="back-btn" @click="selectItem('main')"><svg class="icon"><use href="#close"></use></svg></button>
            <Blog />
          </section>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import Blog from '@/components/Blog.vue'

export default {
  name: 'Samnagerie',
  components: {
    Blog,
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
