<script lang="ts" setup>
import { UserIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'
import { reactive, watchEffect } from 'vue'

const router = useRouter()
const { logout, session: user } = useAuth()

const isOpen = reactive({
  menu: false,
  avatar: ''
})

watchEffect(() => {
  if (!user.value) {
    router.replace('/login')
  }
  isOpen.avatar = localStorage.getItem("avatar") ?? ""
})

const onToggle = () => {
  isOpen.menu = !isOpen.menu
}

const onLogout = () => {
  logout()
  router.replace("/login")
}
</script>

<template>
  <div class="sticky top-0 w-full flex flex-row items-center bg-white shadow-md py-3">
    <nav class="w-full py-2 flex flex-row justify-center items-center">
      <RouterLink to="/" class="text-indigo-500 font-medium transition-all duration-300 hover:scale-95">Home</RouterLink>
      <!-- <RouterLink to="/about" class="text-indigo-500 font-medium transition-all duration-300 hover:scale-95">About</RouterLink> -->
      <RouterLink to="/anime" class="text-indigo-500 font-medium transition-all duration-300 hover:scale-95">Anime</RouterLink>
      <!-- <RouterLink to="/otp" class="text-indigo-500 font-medium transition-all duration-300 hover:scale-95">OTP</RouterLink> -->
      <RouterLink to="/profile" class="text-indigo-500 font-medium transition-all duration-300 hover:scale-95">Profile</RouterLink>
      <div class="absolute right-3">
        <div v-if="!user" class="flex flex-row gap-2">
          <RouterLink
            to="/login"
            class="min-w-20 text-sm text-white font-normal border bg-blue-500 p-2 hover:bg-blue-400 rounded-[16px] text-center transition-all duration-300 hover:scale-95"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="min-w-20 text-sm text-blue-500 font-bold bg-white border-2 border-blue-500 p-2 rounded-[16px] text-center transition-all duration-300 hover:scale-95"
          >
            Register
          </RouterLink>
        </div>
        <div v-else class="relative">
          <button 
            class="border-2 border-indigo-500 rounded-full cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-95" 
            @click="onToggle()">
            <div v-if="!isOpen.avatar" class="flex flex-col transition-all duration-300 hover:scale-95">
              <UserIcon class="w-6 h-6 m-1" />
            </div>
            <div v-else class="flex flex-col transition-all duration-300 hover:scale-95">
              <img :src="isOpen.avatar" alt="User Profile" class="h-8 w-8 object-cover rounded-full" />
            </div>
          </button>
          <div v-if="isOpen.menu" class="absolute top-16 right-0 w-48 py-2 px-3 bg-white rounded-md shadow-lg z-20">
            <div class="flex flex-col transition-all duration-300 hover:scale-95">
              <h1 class="text-sm font-bold text-indigo-500">{{ user?.name }}</h1>
              <h1 class="text-xs font-medium text-gray-400">{{ user?.email }}</h1>
            </div>
            <button 
              class="w-full text-sm text-white font-normal border bg-red-500 p-2 hover:bg-red-400 rounded-md text-center mt-2 transition-all duration-300 hover:scale-95" 
              @click="onLogout()">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="h-full bg-white">
    <RouterView />
  </div>
</template>

<style>
nav {
  font-size: 14px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #6851cf;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
