<template>
  <nav class="subpage-bottom-nav">
    <ul class="internal-nav">
      <li
      class="button"
      :class="'button-' + index "
      @click="getActive(index)"
      v-for="(title, index) in titles"
      :key="title">
        <button :value="activeButton" :class="{active : activeItem == index}" class="bottom">{{ title }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {

  },
  data: function() {
    return {
      activeItem: 0
    }
  },
  computed: {
    ...mapState([
      'titles',
      'activeUxItem',
      'activeButton'
    ]),
  },
  methods: {
    ...mapMutations([
      'ACTIVE_UX_ITEM',
      'WHAT_PAGE',
      'INNER_TITLE',
      'PROJECT_TITLE',
      'ACTIVE_BUTTON'
    ]),
    getActive(item) {
      this.activeItem = item
      this.$store.dispatch('setActiveButton')
      // this.ACTIVE_BUTTON(item)
    },
  },
  mounted() {
  }
}
</script>
