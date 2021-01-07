import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Item from '../views/Item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/termek/bagoly',
    name: "Bagoly",
    component: Item,
    props: {
      itemName: "Bagoly",
      imageNameList: ["/bagoly.jpg"],
      color: "bg-white"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router