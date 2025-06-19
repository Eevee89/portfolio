import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/hangedpokemon',
    component: () => import ('../views/MyWebsites/HangedPokemon.vue')
  },
  {
    path: '/blindtest',
    component: () => import ('../views/MyWebsites/BlindTest.vue')
  },
  {
    path: '/cardcounter',
    component: () => import ('../views/MyWebsites/CardCounter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
