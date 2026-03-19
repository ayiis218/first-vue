import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'
import AnimeView from '../views/AnimeView.vue'
import OtpView from '../views/OtpView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '/', name: 'home', component: MainView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/anime', name: 'anime', component: AnimeView },
        { path: '/otp', name: 'otp', component: OtpView },
      ],
    },
    {
      path: '/profile',
      component: ProfileView,
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        { path: '/login', name: 'login', component: LoginView },
        { path: '/register', name: 'register', component: RegisterView },
      ],
    },
  ],
})

export default router
