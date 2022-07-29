import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import imagesview from '../views/ImagesView.vue'
import documentationview from '../views/DocumentationView.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
