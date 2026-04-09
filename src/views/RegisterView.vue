<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

const form = ref({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
})

const show = ref({
  password: false,
  confirmPassword: false,
})

const isShow = (key: keyof typeof show.value) => {
  show.value[key] = !show.value[key]
}

console.log(form.value)

const onRegister = () => {
  console.log('Register', form.value)
}
</script>

<template>
  <div class="h-screen w-full bg-slate-950 flex flex-row text-slate-200 selection:bg-indigo-500/30 font-sans">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <img src="../assets/signup.jpg" alt="signup" class="w-full h-full object-cover"/>
    </div>
    <div class="w-full h-full flex flex-col justify-center items-center bg-blue-300">
      <div class="w-[60%] flex flex-col gap-3 p-3">
        <h1 class="text-4xl font-bold text-center text-white mb-4">Register</h1>
        <form @submit.prevent="onRegister" class="w-full flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Full Name"
              v-model="form.username"
              class="w-full border border-gray-300 p-3 rounded-md text-black hover:scale-105"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              v-model="form.email"
              class="w-full border border-gray-300 p-3 rounded-md text-black hover:scale-105"
              required
            />
            <div class="w-full bg-white gap-3 flex items-center border border-gray-300 p-3 rounded-md text-black hover:scale-105">
              <input
                :type="show.password ? 'text' : 'password'"
                placeholder="Password"
                v-model="form.password"
                class="bg-transparent outline-none flex-1 text-black"
                required
              />
              <span class="cursor-pointer" @click="isShow('password')">
                <span v-if="!show.password">
                  <EyeIcon class="w-5 h-5 text-black"/>
                </span>
                <span v-else>
                  <EyeSlashIcon class="w-5 h-5 text-black"/>
                </span>
              </span>
            </div>
            <div class=" w-full flex items-center bg-white gap-3 border border-gray-300 p-3 rounded-md text-black hover:scale-105">
              <Input
                :type="show.confirmPassword ? 'text' : 'password'"
                placeholder="Confirm Password"
                v-model="form.confirm_password"
                class="bg-transparent outline-none flex-1 text-black"
                required
              />
              <span class="cursor-pointer" @click="isShow('confirmPassword')">
                  <EyeIcon v-if="!show.confirmPassword" class="w-5 h-5 text-black"/>
                  <EyeSlashIcon v-else class="w-5 h-5 text-black"/>
              </span>
            </div>
            <Button
              type="Submit"
              class="w-full bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400 mt-3 hover:scale-105"
              >Register</Button
            >
          </form>
          <div class="flex flex-row justify-center gap-1">
            <h5 class="text-center font-medium text-white">Already have an account?</h5>
            <RouterLink to="/login" class="text-center text-blue-700 hover:underline">
              Login
            </RouterLink>
          </div>
          <div class="flex flex-row justify-center gap-4 cursor-pointer">
            <img
              src="../assets/google.png"
              alt="google"
              width="25px"
              height="25px"
              class="object-contain hover:scale-125"
            />
            <img
              src="../assets/facebook.png"
              alt="facebook"
              width="25px"
              height="25px"
              class="object-contain hover:scale-125"
            />
            <img
              src="../assets/apple.png"
              alt="apple"
              width="20px"
              height="20px"
              class="object-contain hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
</template>
