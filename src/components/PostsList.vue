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
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
  }
</style>