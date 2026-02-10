<script lang="ts" setup>
import { UserIcon } from '@heroicons/vue/24/outline';
import { RouterView } from 'vue-router'

const session = false
</script>

<template>
  <div class="w-full flex flex-row items-center bg-gray-300 shadow-md">
    <nav class="w-full flex flex-row justify-center gap-3 py-3 cursor-pointer">
      <RouterLink to="/" class="text-black font-normal">Home</RouterLink>
      <RouterLink to="/about" class="text-black font-normal">About</RouterLink>
      <RouterLink to="/anime" class="text-black font-normal">Anime</RouterLink>
      <RouterLink to="/otp" class="text-black font-normal">OTP</RouterLink>
    </nav>
    <div v-if="session" class="flex flex-row justify-end gap-1 my-2 mr-4">
      <RouterLink
        to="/login"
        class="w-[80px] text-sm text-white font-normal border bg-blue-500 p-2 hover:bg-blue-400 rounded-md text-center"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/register"
        class="w-[80px] text-sm text-blue-500 font-normal border bg-white border-2 border-blue-500 p-2 hover:bg-blue-100 rounded-md text-center"
      >
        Register
      </RouterLink>
    </div>
    <div v-else class="flex flex-row justify-end mr-3 ">
      <RouterLink to="/profile" class="border border-black rounded-full p-1 cursor-pointer">
        <UserIcon class="w-4 h-4" />
      </RouterLink>
    </div>
  </div>
  <div class="w-full p-3">
    <RouterView />
  </div>
</template>

<style>
nav {
  font-size: 14px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b883;
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
