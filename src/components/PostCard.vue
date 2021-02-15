<template>
  <li class="post__card">
    <router-link class="post__link" :to="{ name: 'PostDetails', params: { id: post.id }}">
      <h3>{{post.title | uppercase}}</h3>
      <p class="post__body">{{post.body}}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },

  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
  .post__card {
    flex: 1 1 250px;
    margin: 15px;
    border-radius: 10px;
    background-color: #f4f4f4;
    transition: .3s background-color;
  }

  .post__card:hover {
    background-color: #ddd;
  }  
  
  .post__body {
    text-align: justify;
  }

  .post__link {
    height: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    cursor: pointer;
    color: black;
  }

</style>