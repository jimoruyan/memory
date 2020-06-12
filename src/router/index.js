import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Love from '../views/Love.vue'
import Star from '../views/star.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    meta: 1,
    component: Home
  },
  {
    path: '/',
    name: 'love',
    component: Love
  },
  {
    path: '/star',
    name: 'star',
    component: Star
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router