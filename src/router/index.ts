import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/project/',
    redirect: '/home'
  },
  {
    path: '/career/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/project/hangedpokemon',
    component: () => import ('../views/MyWebsites/HangedPokemon.vue')
  },
  {
    path: '/project/blindtest',
    component: () => import ('../views/MyWebsites/BlindTest.vue')
  },
  {
    path: '/project/cardcounter',
    component: () => import ('../views/MyWebsites/CardCounter.vue')
  },
  {
    path: '/career/school',
    component: () => import ('../views/MyCareers/SchoolCareer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
