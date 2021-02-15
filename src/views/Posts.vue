<template>
  <div>
    <h2 v-if="error">Please, try again later.</h2>
    <PostsList
      v-else
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
      error: false,
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
      .then(response => {
        if (!response.ok) {
          this.error = true;
          return;
        }
        return response.json();
      })
      .then(json => this.posts = json)
  },
  components: {
    PostsList
  }
}
</script>