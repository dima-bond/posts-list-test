<template>
  <ul>
    <PostCard 
      v-for="post of posts"
      :key="post.id"
      v-bind:post="post"
    />
  </ul>
</template>

<script>
import PostCard from './PostCard'
export default {
  props: ['posts'],
  components: {
    PostCard
  },
}
</script>

<style scoped>
  ul {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
  }
</style>