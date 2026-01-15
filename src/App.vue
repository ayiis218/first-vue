<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="w-full bg-gray-300 shadow-md text-center ">
    <nav class="w-full flex flex-row justify-center gap-3 py-3 cursor-pointer ">
      <RouterLink to="/" class="text-black font-normal">Home</RouterLink>
      <RouterLink to="/about" class="text-black font-normal">About</RouterLink>
      <RouterLink to="/anime" class="text-black font-normal">Anime</RouterLink>
      <RouterLink to="/otp" class="text-black font-normal">OTP</RouterLink>
    </nav>
  </div>
  <div class="p-3 flex flex-col gap-3 ">
    <HelloWorld msg="You did it!" />
    <RouterView />
  </div>

</template>

<style scoped>
nav {
  font-size: 12px;
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
