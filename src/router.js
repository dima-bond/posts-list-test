import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/views/Posts'
import PostDetails from '@/views/PostDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/posts-list-test/',
  routes: [
    {
      path: '/',
      component: Posts,
    },
    {
      path: '/:id',
      name: 'PostDetails',
      component: PostDetails,
      props: true,
    },
  ]
})