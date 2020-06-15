import Vue from 'vue';
import Router from 'vue-router';
import Movies from './views/Movies.vue';

Vue.use(Router);

import menuJSON from '@/data/menu.json';

let routes = [];

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
