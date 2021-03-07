<style lang="scss">
  @import '@/scss/bvlog.scss';
  @import '@/scss/modal.scss';
</style>


<template>
  <section class="subpage">
    <h1>{{ this.title }}</h1>
    <div class="contact">
      <main class="samb-content">
        Henlo
      </main>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ContactComponent',
  components: {

  },
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
