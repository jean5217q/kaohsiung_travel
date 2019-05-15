import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage/HomePage.vue'
import List from './views/List/List.vue'
import Item from './views/Item/Item.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search',
      component: List
    },
    {
      path: '/attraction/:id',
      name: 'Attraction',
      component: Item
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
