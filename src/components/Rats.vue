<style lang="scss">
  h1 {
    font-size: 40px;
  }
  .inner-h2 {
    font-family: 'Paris Dreamer';
  }
  .inner {
    padding: 0 0 200px;
    display: flex;
  }
  .sidebar-inner {
    width: 20%;
  }
  .main-inner {
    position: relative;
    background-color: #F0FCFF;
    color: #0c1930;
    padding: 20px;
    height: 100%;
    width: 75%;
    border-radius: 20px;
    top: 0;
    .contain {
      width: 765px;
      margin: auto;
    }
  }
</style>

<template>
  <section class="flex-col inner rats-inner">
    <aside class="sidebar-inner">
      <h1>Rats</h1>
      <ol>
        <li><a href="#why-rats">Why Rats?</a></li>
        <li><a href="#males">Males</a></li>
        <li><a href="#females">Females</a></li>
        <li><a href="#litters">Litters</a></li>
        <li><a href="#avail-rats">Available Rats</a></li>
        <li><a href="#j-line">J-Line Legacy</a></li>
      </ol>
    </aside>
    <main class="main-inner">
      <section class="contain">
        <article id="why-rats">
          <h2 class="inner-h2">Why Rats?</h2>
          <p>Rats are very special to me. I've been working with them since 2013, and I love them a lot. In my opinion, they're the perfect pet! Little dogs with hands who live in a cage!</p>
          <p>Rats are incredibly empathetic, intelligent, and beautiful animals. They're not only excellent pets, but insightful in research for psychology and physiology.</p>
          <p>If you want a loyal, loving pet and your schedule doesn't allow for a dog or cat; rats are the answer!</p>
        </article>
        <article id="males">
          <h2 class="inner-h2">The Boys</h2>
          <p>Males tend to be larger and squishier than females, at least in my experience. I love boys, they're my favorite cuddle-buddies and so eager to please!</p>
          <h3>Current Boys</h3>
          <ul>
            <li><strong>Joona</strong> - Gen 1 Russian Blue Berk</li>
            <li><strong>Jabberwocky</strong> - Gen 1 Russian Blue Berk</li>
            <li><strong>Yule</strong> - Gen 2 Moon (Jax D x Louise)</li>
            <li><strong>Yuno</strong> - Gen 2 Platinum Berk (Jax D x Louise)</li>
            <li><strong>Juniper</strong> - Gen 3 Moon (Yule x Elune)</li>
          </ul>
        </article>
        <article id="females">
          <h2 class="inner-h2">The Girls</h2>
          <p>Girls are speedy little goofballs who enjoy causing a ruckus and love playtime. All my girls demand chase games in the morning right when I wake up!</p>
          <h3>Current Girls</h3>
          <ul>
            <li><strong>Louise</strong> - Gen 1 Platinum Berk</li>
            <li><strong>Jeans</strong> - Gen 1 Russian Blue Berk</li>
            <li><strong>Demi</strong> - Gen 1 Moon</li>
            <li><strong>Merry</strong> - Gen 2 Russian Blue w/ Blaze (Jax D x Louise)</li>
            <li><strong>Elune</strong> - Gen 2 Russian Moon Siamese (Jax D x Louise)</li>
            <li><strong>Sookie</strong> - Gen 3 Russian Moon Siamese (Yule x Elune)</li>
          </ul>
        </article>
        <article id="litters">
          <h2 class="inner-h2">Litters!</h2>

        </article>
        <article id="avail-rats">
          <h2 class="inner-h2">Available Rattos</h2>

        </article>
        <article id="j-line">
          <h2 class="inner-h2">The J-Line</h2>

        </article>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  components: {

  },
  data: function() {
    return {

    }
  }
}
</script>
