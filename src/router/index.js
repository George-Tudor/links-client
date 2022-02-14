import Vue from 'vue'
import VueRouter from 'vue-router'
import Links from '../views/Links.vue'
import Login from '../views/Login.vue'
import Landing from '@/views/Landing'
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
