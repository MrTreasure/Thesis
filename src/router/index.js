import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from 'page/Home';
import begin from 'page/begin';
import CduNews from 'page/CduNews';
import NewsDetail from 'page/NewsDetail';
import Introduction from 'page/Introduction';
import CduSet from 'page/CduSet';
import CduMajor from 'page/CduMajor';
import login from 'page/login';
import admin from 'page/admin';
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
          path: '/newsAll',
          component: CduNews,
          name: 'newsAll'
        },
        {
          path: '/news/:id',
          component: NewsDetail,
          name: 'newsDetail'
        },
        {
          path: '/Introduction',
          component: Introduction,
          name: 'Introduction'
        },
        {
          path: '/CduSet',
          component: CduSet,
          name: 'CduSet'
        },
        {
          path: '/CduMajor',
          component: CduMajor,
          name: 'CduMajor'
        }
      ]
    },
    {
      path: '/login',
      component: login,
      name: 'login',
      meta: {logged: false}
    },
    {
      path: '/admin',
      component: admin,
      name: 'admin',
      beforeEnter: (to, from, next) => {
        if (from.meta.logged || sessionStorage.getItem('logged')) {
          next();
        } else {
          next({name: 'login'});
        }
      }
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
