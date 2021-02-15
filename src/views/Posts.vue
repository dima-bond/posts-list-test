<template>
  <div>
    <PostsList 
      v-bind:posts="posts"
    />
  </div>
</template>

<script>
import PostsList from '@/components/PostsList'
export default {
  name: 'App',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
      .then(response => response.json())
      .then(json => this.posts = json)
  },
  components: {
    PostsList
  }
}
</script>