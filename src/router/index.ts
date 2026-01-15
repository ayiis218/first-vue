import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AnimeView from '../views/AnimeView.vue'
import OtpView from '../views/OtpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/anime',
      name: 'anime',
      component: AnimeView,
    },
    {
      path: '/otp',
      name: 'otp',
      component: OtpView,
    }
  ],
})

export default router
