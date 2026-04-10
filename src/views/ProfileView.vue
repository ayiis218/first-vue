<script lang="ts" setup>
import { reactive, computed, watchEffect } from 'vue'
import { useLocalStorage } from '@/stores/auth'
import { EyeIcon, EyeSlashIcon, UserIcon } from '@heroicons/vue/20/solid'
import { SimpleRegister } from '@/services/auth/simple-register'

const session = useLocalStorage<{
  name: string
  email: string
}>("session", null)

const onModal = reactive({
  updateProfile: false,
})

const user = computed(() => session.value ?? {
  name: '',
  email: ''
})

const userProfile = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  avatar: '',
  textAlert: '',
})

const show = reactive({
  password: false,
  confirmPassword: false,
})

userProfile.name = user.value.name
userProfile.email = user.value.email

watchEffect(() => {
  userProfile.avatar = localStorage.getItem("avatar") ?? ""
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const result = e.target?.result as string
    userProfile.avatar = result
    localStorage.setItem("avatar", result)
  }
  reader.readAsDataURL(file)
}

const onUpdate = (action: boolean) => {
  onModal.updateProfile = action
}

const updateProfile = () => {
  const payload = {
    username: userProfile.name,
    email: userProfile.email,
    password: userProfile.password,
    confirm_password: userProfile.confirmPassword
  }
  if(!payload) return userProfile.textAlert = "Payload tidak boleh kosong"
  if (userProfile.password !== userProfile.confirmPassword) return userProfile.textAlert = "Password dan Confirm Password harus sama"

  SimpleRegister(payload)
  onModal.updateProfile = false
  return userProfile.textAlert = "Profile berhasil diupdate"
}

const isShow = (field: keyof typeof show) => {
  show[field] = !show[field]
}

watchEffect(() => {
  if(userProfile.textAlert) {
    setTimeout(() => {
      userProfile.textAlert = ''
    }, 3000)
  }
})

</script>

<template >
  <main>
    <div class="relative">
      <b-alert v-if="userProfile.textAlert" class="absolute top-5 left-1/2 -translate-x-1/2 z-50 w-fit bg-red-400 text-white rounded-md py-2 px-3 flex flex-row items-center gap-2 hover:scale-105 transition-all duration-300 z-20" >
        {{ userProfile.textAlert }}
        <ClCloseMd @click="userProfile.textAlert = ''" class="cursor-pointer hover:scale-125"/>
      </b-alert>
    </div>
    <div class="flex flex-col items-center h-[93vh] gap-3">
      <div class="flex flex-col items-center mt-20 gap-3">
        <div class="border-2 border-indigo-500 rounded-full cursor-pointer text-indigo-400 hover:bg-indigo-500 transi tion-all duration-300 hover:scale-110 max-w-40 shadow-lg">
          <input type="file" @change="handleFileChange" class="absolute h-28 w-28 opacity-0 cursor-pointer" />
          <span v-if="!userProfile.avatar" class="cursor-pointer" >
            <UserIcon class="h-28 w-28 cursor-pointer"/>
          </span>
          <div v-else>
            <img :src="userProfile.avatar" alt="User Profile" class="h-28 w-28 object-cover rounded-full" />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-base text-black transition-all duration-300 hover:scale-110">{{ userProfile.name }}</h1>
          <p class="text-gray-500 text-sm font-medium transition-all duration-300 hover:scale-110">{{ userProfile.email }}</p>
        </div>
        <button 
          v-if="userProfile.name.toLowerCase() !== 'guest'" 
          @click="onUpdate(true)" 
          class="border-2 border-indigo-500 font-bold rounded-[10px] px-3 py-2 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110">
          Ubah Data Diri
        </button>
      </div>
    </div>

    <div v-if="onModal.updateProfile" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100%] bg-black/80">
      <div class="flex justify-center items-center w-full h-full">
        <section class="w-[420px] rounded-[12px] flex flex-col gap-3 border border-gray-300 bg-white p-5">
          <header class="flex justify-center">
            <h1 class="text-xl font-bold text-black">Update Profile</h1>
          </header>
          <main class="w-full flex flex-col gap-3">
          <input 
            name="name"
            type="text" 
            v-model="userProfile.name" 
            placeholder="Full Name" 
            required
            class="border border-gray-300 rounded-md p-2 text-black">
          <input 
            name="email"
            type="email" 
            v-model="userProfile.email" 
            placeholder="Email"
            required
            class="border border-gray-300 rounded-md p-2 text-black">
          <div class="w-full border border-gray-300 rounded-md p-2 text-black flex flex-row items-center gap-2">
            <input 
              name="password"
              :type="show.password ? 'text' : 'password'" 
              v-model="userProfile.password" 
              placeholder="Password" 
              required
              class="w-full bg-transparent outline-none">
            <span @click="isShow('password')">
              <EyeIcon v-if="!show.password" class="w-5 h-5"/>
              <EyeSlashIcon v-else class="w-5 h-5"/>
            </span>
          </div>
          <div class="w-full border border-gray-300 rounded-md p-2 text-black flex flex-row items-center gap-2">
            <input 
              name="confirmPassword"
              :type="show.confirmPassword ? 'text' : 'password'" 
              v-model="userProfile.confirmPassword" 
              placeholder="Confirm Password" 
              required
              class="w-full bg-transparent outline-none">
            <span @click="isShow('confirmPassword')">
              <EyeIcon v-if="!show.confirmPassword" class="w-5 h-5"/>
              <EyeSlashIcon v-else class="w-5 h-5"/>
            </span>
          </div>
        </main>
        <footer class="w-full flex flex-row gap-3 h-10">
          <button
           @click="onUpdate(false)" 
           class="w-full border border-red-400 text-red-400 rounded-md bg-white hover:scale-105 transition-all duration-300">
            Cancel
          </button>
          <button
           @click="updateProfile" 
           class="w-full bg-blue-400 text-white rounded-md hover:scale-105 transition-all duration-300">
            Save
          </button>
        </footer>
        </section>
      </div>
    </div>
  </main>
</template>
