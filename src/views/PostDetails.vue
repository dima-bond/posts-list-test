<template>
<div>
  <p>post details here</p>
  <p>{{post}}</p>
</div>
  
</template>

<script>
export default {
  props: ['id'],
    data() {
    return {
      post: {},
    }
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => response.json())
      .then(json => this.post = json)
  }
}
</script>

<style>

</style>