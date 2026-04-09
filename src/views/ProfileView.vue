<script lang="ts" setup>
import { reactive, computed, watchEffect } from 'vue'
import { useLocalStorage } from '@/stores/auth'
import { UserIcon } from '@heroicons/vue/20/solid'

const session = useLocalStorage<{
  name: string
  email: string
}>("session", null)

const user = computed(() => session.value ?? {
  name: '',
  email: ''
})

const userProfile = reactive({
  name: '',
  email: '',
  avatar: ''
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
</script>

<template >
  <main>
    <div class="flex flex-col items-center h-screen gap-3">
      <div class="flex flex-col items-center mt-20 gap-3">
        <div class="border-2 border-indigo-500 rounded-full cursor-pointer text-indigo-400 hover:bg-indigo-500 transition-all duration-300 hover:scale-110 max-w-40 shadow-lg">
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
      </div>
    </div>
  </main>
</template>
