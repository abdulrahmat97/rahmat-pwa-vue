import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: () => import('../views/foods/index.vue'),
  },
  {
    path:'/foods/:id',
    component: () => import('../views/foods/show')
  },
  {
    path:'/cart',
    component: () => import('../views/cart/index')
  },
  {
    path:'/ordersuccess',
    component: () => import('../views/waiting/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
