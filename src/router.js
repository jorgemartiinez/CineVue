import Vue from 'vue';
import Router from 'vue-router';
import Items from './views/Items.vue';
import Item from './views/Item.vue';
import Tops from './views/Tops.vue';

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
      component: Items
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Item
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Items
    },
    {
      path: '/shows/:id',
      name: 'Show',
      component: Item
    },
    {
      path: '/tops',
      name: 'Tops',
      component: Tops
    }
  ]
});
