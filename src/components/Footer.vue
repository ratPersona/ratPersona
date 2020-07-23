<style lang="scss">
  @import '@/scss/social.scss';
</style>

<template>
  <section class="social-info" @click="toggleFooter()">
    <div v-if="closed" class="content closed">
      <div class="flex closed">

      </div>
    </div>
    <div v-else class="content open">
      <div class="flex open">
        <ul>
          <li>
            <!-- <svg class="icon-border"><use href="#circle"></use></svg> -->
            <a href="/">
              <svg class="icon"><use href="#facebook"></use></svg>
            </a>
          </li>
          <li>
            <!-- <svg class="icon-border"><use href="#circle"></use></svg> -->
            <a href="/"><svg class="icon"><use href="#twitter"></use></svg></a>
          </li>
          <li>
            <!-- <svg class="icon-border"><use href="#circle"></use></svg> -->
            <a href="/"><svg class="icon"><use href="#youtube"></use></svg></a>
          </li>
          <li>
            <!-- <svg class="icon-border"><use href="#circle"></use></svg> -->
            <a href="/"><svg class="icon"><use href="#instagram"></use></svg></a>
          </li>
          <li>
            <!-- <svg class="icon-border"><use href="#circle"></use></svg> -->
            <a href="/"><svg class="icon"><use href="#etsy"></use></svg></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'home',
  components: {

  },
  data: function () {
    return {
      closed: true,
    }
  },
  methods: {
    toggleFooter() {
      this.closed = !this.closed
    },
    //STORE
    ...mapMutations([

    ]),

  },
  computed: {
    //store
  ...mapState([

      ]),
  },
}
</script>
