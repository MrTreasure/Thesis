import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from 'page/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home
    }
  ]
})
