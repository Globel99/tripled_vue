import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vase from '../views/Vase.vue'
import Case from '../views/Case.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vaza',
    name: 'Vase',
    component: Vase
  },
  {
    path: '/tok',
    name: 'Case',
    component: Case
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
