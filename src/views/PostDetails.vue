<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      An error has occurred, <br>
      Please, try again later
      <hr>
    </div>
    <div v-else class="post-details">
      <router-link class="post-details__back" to="/">Back</router-link>
      <div class="post-details__user">
        <h2>{{user.name}}</h2>
        <p>Local citizen @{{user.username}}</p>
        <p>E-mail me: {{user.email | lowercase}}</p>
      </div>
      <div class="post-details__post">
        <h2 class="post-details__title">{{post.title}}</h2>
        <p class="post-details__body">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
    data() {
    return {
      post: {},
      user: {},
      error: false,
      loading: true,
    }
  },
  async mounted() {
    try {
      let responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
      this.post = await responsePost.json();
      let responseUser =  await fetch(`https://jsonplaceholder.typicode.com/users/${this.post.userId}`);
      this.user = await responseUser.json();
      this.loading = false;
      if (!this.post.id || !this.user.id) {
        this.error = true;
      }
    } catch (error) {
      console.log(`meh ${error}`);
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
}
</script>

<style>
  .post-details {
    display: grid;
    grid-template: repeat(2, auto) / 1fr 2fr 1fr;
  }

  .post-details__user {
    grid-column: 2 / 3;
    grid-row: 1;
    border: 1px solid grey;
    border-radius: 10px;
  }

  .post-details__post {
    grid-column: 2 / 3;
    grid-row: 2;
    padding: 20px;
    background-color: #ddd;
    border-radius: 10px;
    animation: slide-down 2s 1;
  }

  .post-details__body {
    text-align: right;
    font-style: italic;
  }

  .post-details__title {
    text-transform: capitalize;
  }

  .post-details__back {
    grid-column: 1 / 2;
    align-self: start;
    justify-self: end;
    margin: 20px;
    height: 30px;
    width: 60px;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    color: white;
    background-color: grey;
    border-radius: 10px;
  }

  @keyframes slide-down {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    .post-details {
      grid-template: repeat(3, auto) / 20px 1fr 20px;
    }

    .post-details__back {
      grid-row: 3;
      grid-column: 2;
    }
  }
</style>