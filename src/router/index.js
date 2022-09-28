import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import imagesview from '../views/ImagesView.vue'
import documentationview from '../views/DocumentationView.vue'
import KnifeguardView from '../views/KnifeguardView.vue'
import PlateView from '../views/PlateView.vue'
import UtensilView from '../views/UtensilView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/prototyping',
    name: 'prototyping',
    component: imagesview
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: documentationview
  },
  {
    path: '/documentation/knife-guard',
    name: 'documentation-knifeguard',
    component: KnifeguardView
  },
  {
    path: '/documentation/plate',
    name: 'documentation-plate',
    component: PlateView
  },
  {
    path: '/documentation/utensil',
    name: 'documentation-utensil',
    component: UtensilView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
