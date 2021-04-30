<style lang="scss">
  @import '@/scss/contact.scss';
  @import '@/scss/buttons.scss';
</style>
<template>
  <main>
    <div>
      <h1>Get in Touch!</h1>
      <div class="flex-container">
        <div class="contact-container">
          <svg class="icon desktop"><use href="#email"></use></svg>
          <h2>Email Me:</h2>
          <p>I check it, I promise</p>
          <a class="contact-btn email" href="mailto:sam@ratpersona.dev">
            <svg class="icon mobile"><use href="#email"></use></svg>
            <span class="desktop">Let's Go!</span>
            <span class="mobile">Email Me!</span>
          </a>
        </div>
        <div class="contact-container">
          <svg class="icon desktop"><use href="#add-me"></use></svg>
          <h2>Add Me:</h2>
          <p>Yeah I have a LinkedIn...kinda...</p>
          <a class="contact-btn linkedin" href="https://www.linkedin.com/in/samantha-nelson-212056104/">
            <svg class="icon mobile"><use href="#add-me"></use></svg>
            <span class="desktop">Be my Friend!</span>
            <span class="mobile">LinkedIn</span>
          </a>
        </div>
        <div class="contact-container">
          <svg class="icon desktop"><use href="#phone"></use></svg>
          <h2>Call Me (Beep Me):</h2>
          <p>Just remember to leave a voicemail!</p>
          <a class="contact-btn call" href="tel:+19209600612">
            <svg class="icon mobile"><use href="#phone"></use></svg>
            <span class="desktop">Beep Boop!</span>
            <span class="mobile">Call Me!</span>
          </a>
        </div>
      </div>
      <footer class="socials">
        <div class="flex-container">
          <!-- <a class="social one" href="/" target="_blank">
            <svg class="icon"><use href="#facebook"></use></svg>
          </a> -->
          <a class="social two" href="https://www.etsy.com/shop/ratPersonaOddities" target="_blank">
            <svg class="icon"><use href="#etsy"></use></svg>
          </a>
          <a class="social three" href="https://www.instagram.com/ratpersona/" target="_blank">
            <svg class="icon"><use href="#instagram"></use></svg>
          </a>
          <a class="social four" href="https://twitter.com/ratpersona" target="_blank">
            <svg class="icon"><use href="#twitter"></use></svg>
          </a>
          <!-- <a class="social five" href="/" target="_blank">
            <svg class="icon"><use href="#youtube"></use></svg>
          </a> -->
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
