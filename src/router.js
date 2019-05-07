import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import ArticleDetails from './views/article-details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles/:id',
      name: 'article-details',
      component: ArticleDetails
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
