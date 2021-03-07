<style lang="scss">
@import '@/scss/portfolio';
</style>

<template>
  <div class="ux-projects">
    <h1>{{ this.title }}</h1>
    <section>
      <div class="name">
        Content
      </div>
      <div class="research">
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
      </div>
    </section>

    <nav class="subpage-bottom-nav">
      <ul>
        <li @click="getTitle('Nomader')">Nomader</li>
        <li @click="getTitle('Research')">Research</li>
        <li @click="getTitle('Methodology')">Methodology</li>
        <li @click="getTitle('Design')">Design</li>
        <li @click="getTitle('Conclusion')">Conclusion</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {

  },
  data: function() {
    return {
      activeItem: '',
      title: 'Nomader'
    }
  },
  methods: {
    getTitle(title) {
      this.title = title
    },
  }
}
</script>
