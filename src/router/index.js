import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from 'page/Home';
import begin from 'page/begin';

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
          component: begin
        }
      ]
    }
  ]
})
