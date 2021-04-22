<style lang="scss">
  @import '@/scss/contact.scss';
  @import '@/scss/buttons.scss';
</style>
<template>
  <main class="contact subpage">
    <div>
      <div class="flex-container">
        <div>
          <svg class="icon"><use href="#email"></use></svg>
          <h2>Email Me:</h2>
          <p>I check it, I promise</p>
          <button class="contact-btn">Let's Go!</button>
        </div>
        <div>
          <svg class="icon"><use href="#add-me"></use></svg>
          <h2>Add Me:</h2>
          <p>Yeah I have a LinkedIn...kinda...</p>
          <button class="contact-btn">Let's Go!</button>
        </div>
        <div>
          <svg class="icon"><use href="#phone"></use></svg>
          <h2>Call Me (Beep Me):</h2>
          <p>Just remember to leave a voicemail!</p>
          <button class="contact-btn">Let's Go!</button>
        </div>
      </div>
      <footer class="socials">
        <div class="flex-container">
          <a class="social one" href="/" target="_blank">
            <svg class="icon"><use href="#facebook"></use></svg>
          </a>
          <a class="social two" href="/" target="_blank">
            <svg class="icon"><use href="#etsy"></use></svg>
          </a>
          <a class="social three" href="/" target="_blank">
            <svg class="icon"><use href="#instagram"></use></svg>
          </a>
          <a class="social four" href="/" target="_blank">
            <svg class="icon"><use href="#twitter"></use></svg>
          </a>
          <a class="social five" href="/" target="_blank">
            <svg class="icon"><use href="#youtube"></use></svg>
          </a>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>

export default {
  name: 'ContactComponent',
  components: {

  },
  data: function() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
