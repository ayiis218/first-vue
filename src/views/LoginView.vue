<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { GuestAuth, Login } from '@/services/auth/simple-auth'
import { ClCloseMd } from '@kalimahapps/vue-icons'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  textAlert: '',
})

const show = ref({
  password: false,
})

const isShow = (field: keyof typeof show.value) => {
  show.value[field] = !show.value[field]
}

const onLogin = async () => {
  const result = await Login(form)
  if (result !== "Login berhasil") return form.textAlert = result
  form.textAlert = result
  router.push("/profile")
}

const onGuestAuth = async () => {
  const payload = {
    email: form.email,
    password: form.password,
  }

  try {
    await GuestAuth(payload)
    form.textAlert = "Login berhasil"
    router.push("/profile")
  } catch (err) {
    form.textAlert = "Login gagal"
    console.error(err)
  }
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
      <img src="../assets/login.jpg" alt="login" class="w-full h-full object-cover"/>
    </div>
    <div class="w-full h-full flex flex-col justify-center items-center bg-blue-300">
      <div class="w-[60%] flex flex-col gap-3 p-3">
        <h1 class="text-4xl font-bold text-center text-white mb-4">Login</h1>
        <form @submit.prevent="onLogin" class="w-full flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            v-model="form.email"
            class="w-full border border-gray-300 p-3 rounded-md text-black hover:scale-105"
            required
          />
          <div class="w-full flex flex-row items-center bg-white gap-3 border border-gray-300 p-3 rounded-md hover:scale-105">
            <input
              :type="show.password ? 'text' : 'password'"
              placeholder="Password"
              name="password"
              v-model="form.password"
              class="w-[80%] bg-transparent outline-none flex-1 text-black"
              required
            />
            <span class="cursor-pointer" @click="isShow('password')">
              <EyeIcon v-if="!show.password" class="w-5 h-5 text-black"/>
              <EyeSlashIcon v-else class="w-5 h-5 text-black"/>
            </span>
          </div>
          <Button
            type="submit"
            class="w-full bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400 mt-3 hover:scale-105 font-bold"
          >
            Login
          </Button>
          <Button @click="onGuestAuth" class="w-full border border-blue-500 bg-white font-bold rounded-md p-3 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105">
            Login as Guest
          </Button>
        </form>
        <div class="flex flex-row justify-center gap-1">
          <h5 class="text-center font-medium text-white text-xs md:text-base">Don't have an account?</h5>
          <RouterLink to="/register" class="text-center font-medium text-blue-700 hover:underline text-xs md:text-base">
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
              class="object-contain hover:scale-125"
            />
          </div>
          <div class="cursor-pointer" @click="useFacebookLogin()">
            <img
              src="../assets/facebook.png"
              alt="facebook"
              width="25px"
              height="25px"
              class="object-contain hover:scale-125"
            />
          </div>
          <div class="cursor-pointer" @click="useAppleLogin()">
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
  </div>
</template>
