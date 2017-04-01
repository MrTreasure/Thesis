import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from 'page/Home';
import begin from 'page/begin';
import CduNews from 'page/CduNews';
import NotFoundComponent from 'page/404';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home,
      children: [
        {
          path: '',
          component: begin,
          name: 'begin'
        },
        {
          path: '/news',
          component: CduNews,
          name: 'news'
        }
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
