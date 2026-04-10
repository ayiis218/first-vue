<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { SimpleRegister } from '@/services/auth/simple-register'

const router = useRouter()

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  textAlert: '',
})

const show = ref({
  password: false,
  confirmPassword: false,
})

const isShow = (key: keyof typeof show.value) => {
  show.value[key] = !show.value[key]
}

const onRegister = () => {
  if (form.password !== form.confirm_password) return form.textAlert = "Password dan Confirm Password tidak sama"
  SimpleRegister(form)
  router.push("/login")
}

watchEffect(() => {
  if(form.textAlert) {
    setTimeout(() => {
      form.textAlert = ''
    }, 3000)
  }
})
</script>

<template>
  <div class="relative">
    <b-alert v-if="form.textAlert" class="absolute top-5 left-1/2 -translate-x-1/2 z-50 w-fit bg-red-400 text-white rounded-md py-2 px-3 flex flex-row items-center gap-2 hover:scale-105 transition-all duration-300 z-20" >
      {{ form.textAlert }}
      <ClCloseMd @click="form.textAlert = ''" class="cursor-pointer hover:scale-125"/>
    </b-alert>
  </div>  
  <div class="h-screen w-full bg-slate-950 flex flex-col xl:flex-row text-slate-200 selection:bg-indigo-500/30 font-sans">
    <div class="w-full h-full flex flex-col justify-center items-center hidden xl:block">
      <img src="../assets/signup.jpg" alt="signup" class="w-full h-full object-cover"/>
    </div>
    <div class="w-full h-full flex flex-col justify-center items-center bg-blue-300">
      <div class="w-[60%] flex flex-col gap-3 p-3">
        <h1 class="text-4xl font-bold text-center text-white mb-4">Register</h1>
        <form @submit.prevent="onRegister" class="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              v-model="form.username"
              class="w-full border border-gray-300 p-3 rounded-md text-black hover:scale-105"
              required
            />
            <input
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
                class="w-[80%] bg-transparent outline-none flex-1 text-black"
                required
              />
              <span class="cursor-pointer" @click="isShow('password')">
                <EyeIcon v-if="!show.password" class="w-5 h-5 text-black"/>
                <EyeSlashIcon v-else class="w-5 h-5 text-black"/>
              </span>
            </div>
            <div class=" w-full flex items-center bg-white gap-3 border border-gray-300 p-3 rounded-md text-black hover:scale-105">
              <input
                :type="show.confirmPassword ? 'text' : 'password'"
                placeholder="Confirm Password"
                v-model="form.confirm_password"
                class="w-[80%] bg-transparent outline-none flex-1 text-black"
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
            <h5 class="text-xs md:text-base text-center font-medium text-white">Already have an account?</h5>
            <RouterLink to="/login" class="text-xs md:text-base text-center font-medium text-blue-700 hover:underline">
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
