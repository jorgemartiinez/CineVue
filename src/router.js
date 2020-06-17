import Vue from 'vue';
import Router from 'vue-router';
import Items from './views/Items.vue';
import Item from './views/Item.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Items,
      meta: { reuse: false }
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Item,
      meta: { reuse: false }
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Items,
      meta: { reuse: false }
    },
    {
      path: '/shows/:id',
      name: 'Show',
      component: Item,
      meta: { reuse: false }
    }
  ]
});
