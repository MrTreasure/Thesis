import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from 'page/Home';
import begin from 'page/begin';
import CduNews from 'page/CduNews';
import NewsDetail from 'page/NewsDetail';
import Introduction from 'page/Introduction';
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
        }
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
