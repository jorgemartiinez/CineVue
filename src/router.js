import Vue from 'vue';
import Router from 'vue-router';
import Movies from './views/Movies.vue';
import Movie from './views/Movie.vue';
import Shows from './views/Shows.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Movies
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Shows
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie
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
