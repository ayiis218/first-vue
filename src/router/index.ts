import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AnimeView from '../views/AnimeView.vue'
import OtpView from '../views/OtpView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DetailView from '@/views/DetailView.vue'
import { isAuthenticated } from '@/stores/session'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/404',
      name: '404',
      component: NotFoundView
    },
    {
      path: '/auth',
      component: MainLayout,
      redirect: '/profile',
      meta: { requiresAuth: true },
      children: [
        { path: '/profile', name: 'profile', component: ProfileView },
        { path: '/anime', name: 'anime', component: AnimeView },
        { path: '/anime/:id', name: 'detail-anime', component: DetailView },
        { path: '/otp', name: 'otp', component: OtpView },
      ],
    },
    {
      path: '/',
      component: AuthLayout,
      children: [
        { path: '/', name: 'home', component: MainView },
        { path: '/login', name: 'login', component: LoginView },
        { path: '/register', name: 'register', component: RegisterView },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
