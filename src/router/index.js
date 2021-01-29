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
    path: '/plans',
    name: 'Plans',
    component: ()=>import('../views/Plans.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: ()=>import('../views/Events.vue')
  },
  {
    path: '/well-being-benefits',
    name: 'Well Being Benefits',
    component: ()=>import('../views/WellbeingBenefits.vue')
  },
  {
    path: '/eap',
    name: 'Eap',
    component: ()=>import('../views/Eap.vue')
  },
  {
    path: '/my-organisaion',
    name: 'My Organisation',
    component: ()=>import('../views/MyOrganization.vue')
  },
  {
    path: '/virtual',
    name: 'Virtual',
    component: ()=>import('../views/Virtual.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
