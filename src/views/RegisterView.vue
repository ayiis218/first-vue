<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = ref({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
})

const onRegister = () => {
  console.log(form.value)
}
</script>

<template>
  <div class="w-full h-full flex flex-row justify-center items-center">
    <div class="h-full flex-1 bg-blue-300">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <img src="" alt="" />
      </div>
    </div>
    <div class="h-full flex-1 bg-white">
      <div class="h-full flex flex-col gap-3 justify-center items-center">
        <div class="w-[60%] flex flex-col gap-3 p-3">
          <h1 class="text-2xl font-bold text-center">Form Register</h1>
          <form @submit.prevent="onRegister" class="w-full flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Full Name"
              v-model="form.username"
              class="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              v-model="form.email"
              class="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              v-model="form.password"
              class="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              v-model="form.confirm_password"
              class="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <Button
              type="Submit"
              class="w-full bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400"
              >Register</Button
            >
          </form>
          <div class="flex flex-row justify-center gap-1">
            <h5 class="text-center text-normal text-gray-500">Already have an account?</h5>
            <RouterLink to="/login" class="text-center text-blue-500 hover:underline">
              Login
            </RouterLink>
          </div>
          <div class="flex flex-row justify-center gap-4 cursor-pointer">
            <img
              src="../assets/google.png"
              alt="google"
              width="25px"
              height="25px"
              class="object-contain"
            />
            <img
              src="../assets/facebook.png"
              alt="facebook"
              width="25px"
              height="25px"
              class="object-contain"
            />
            <img
              src="../assets/apple.png"
              alt="apple"
              width="20px"
              height="20px"
              class="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
