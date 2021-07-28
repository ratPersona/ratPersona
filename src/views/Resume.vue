<style lang="scss">
@import '@/scss/subpage';
@import '@/scss/buttons';
@import '@/scss/resume';
</style>

<template>
  <section class="subpage">
    <div class="content-container">
    <!-- <h1>Professional Stuff!</h1> -->
      <div class="resume">
        <nav
        class="selection-nav">
          <router-link
          to="/employment"
          tag="button"
          class="flex-col employment">
            <svg class="icon"><use href="#employment"></use></svg>
            <h2>Employment</h2>
          </router-link>
          <router-link
          to="/education"
          tag="button"
          class="flex-col education">
              <svg class="icon education"><use href="#education"></use></svg>
              <h2>Education</h2>
          </router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Resume',
  components: {

  },
  data: function() {
    return {
      activeItem: '',
      activeButton: 0,
      activeCard: 1,
      titles: ['Mayville Engineering Company', 'BrownBoots', 'Americorps', 'C.E.T.L.']
    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  watch: {
  },
  methods: {
    // getActive(item) {
    //   this.activeItem = item
    //   this.activeButton = item
    //   this.activeCard = 1
    // },
    // activeButtonResearch(button) {
    //   this.activeCard = button
    // }
  }
}
</script>
