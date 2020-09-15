<style lang="scss">
  .flex-col.blog {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  article {
    padding: 0 20px;
    width: 700px;
    height: 100%;
    overflow: scroll;
  }
</style>


<template>
  <div class="flex-col blog">
    <article v-for="post in posts" :key="post">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content"></div>
    </article>
  </div>
</template>

<script>
import { db } from '@/main'

export default {
  data: function() {
    return {
      posts: []
    }
  },
  firestore: function() {
    return {
      posts: db.collection('general')
    }
  },
  mounted() {

  }
}
</script>
