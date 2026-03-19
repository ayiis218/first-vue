<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// import { signInWithGoogle } from '@/services/google'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { API_Login } from '@/services/auth'

const form = ref({
  username: '',
  email: '',
  password: '',
})

const show = ref({
  password: false,
})

const isShow = (field: keyof typeof show.value) => {
  show.value[field] = !show.value[field]
}

const onLogin = async () => {
  // const result = await API_Login(form.value)
  // if (result.status === 200) {
  //   window.location.href = "/dashboard"
  // }else {
  //   console.log("Login failed")
  // }
}

// const useGoogleLogin = async () => await signInWithGoogle()
const useGoogleLogin = () => {
  console.log('Google login')
}

const useFacebookLogin = () => {
  console.log('Facebook login')
}

const useAppleLogin = () => {
  console.log('Apple login')
}

</script>

<template>

  <div class="w-full h-full flex flex-row justify-center items-center">
    <div class="h-full flex-1 ">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <img src="../assets/login.jpg" alt="login" width="600" height="600"/>
      </div>
    </div>
    <div class="h-full flex-1 bg-blue-300 ">
      <div class="h-full flex flex-col gap-3 justify-center items-center">
        <div class="w-[60%] flex flex-col gap-3 p-3">
          <h1 class="text-2xl font-bold text-center">Form Login</h1>
          <form @submit.prevent="onLogin" class="w-full flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Email"
              v-model="form.email"
              class="w-full border border-gray-300 p-3 rounded-md"
              required
            />
             <div class="w-full flex items-center bg-white gap-3 border border-gray-300 p-3 rounded-md">
              <Input
                :type="show.password ? 'text' : 'password'"
                placeholder="Password"
                v-model="form.password"
                class="bg-transparent outline-none flex-1"
                required
              />
              <span class="cursor-pointer" @click="isShow('password')">
                  <EyeIcon v-if="!show.password" class="w-5 h-5"/>
                  <EyeSlashIcon v-else class="w-5 h-5"/>
              </span>
            </div>
            <Button
              type="submit"
              class="w-full bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400 mt-3 "
            >
              Login
            </Button>
          </form>
          <div class="flex flex-row justify-center gap-1">
            <h5 class="text-center text-normal">Don't have an account?</h5>
            <RouterLink to="/register" class="text-center text-blue-700 hover:underline">
              Register
            </RouterLink>
          </div>
          <div class="flex flex-row justify-center gap-4 cursor-pointer">
            <div class="cursor-pointer" @click="useGoogleLogin()">
              <img
                src="../assets/google.png"
                alt="google"
                width="25px"
                height="25px"
                class="object-contain"
              />
            </div>
            <div class="cursor-pointer" @click="useFacebookLogin()">
              <img
                src="../assets/facebook.png"
                alt="facebook"
                width="25px"
                height="25px"
                class="object-contain"
              />
            </div>
            <div class="cursor-pointer" @click="useAppleLogin()">
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
  </div>
</template>
