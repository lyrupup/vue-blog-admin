import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import ArticleList from './components/ArticleList'
import ArticleCreate from './components/ArticleCreate'
import ArticleEdit from './components/ArticleEdit'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/articles/index"
    },
    {
      path: '/articles/index',
      name: 'articles-list',
      component: ArticleList
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: ArticleCreate
    },{
      path: '/articles/:id/edit',
      name: 'edit-create',
      component: ArticleEdit
    }
  ]
})
