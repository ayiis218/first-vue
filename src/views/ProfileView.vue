<script lang="ts" setup>
import { reactive, computed } from 'vue'
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

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    userProfile.avatar = e.target?.result as string
  }
  reader.readAsDataURL(file)
}
</script>

<template >
  <main>
    <div class="flex flex-col items-center h-screen gap-3 p-3 ">
      <div class="flex flex-col items-center mt-20 gap-3">
        <div class="border-2 border-indigo-500 p-4 rounded-full cursor-pointer text-indigo-400 hover:bg-indigo-500 transition-all duration-300 hover:scale-110">
          <input type="file" @change="handleFileChange" class="absolute h-20 w-20 opacity-0 cursor-pointer" />
          <span v-if="!userProfile.avatar" class="cursor-pointer" >
            <UserIcon class="h-12 w-12 cursor-pointer"/>
          </span>
          <span v-else class="cursor-pointer">
            <img :src="userProfile.avatar" width="48" height="48" alt="User Profile" class="cursor-pointer object-contain" />
          </span>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-base text-black transition-all duration-300 hover:scale-110">{{ userProfile.name }}</h1>
          <p class="text-gray-500 text-sm font-medium transition-all duration-300 hover:scale-110">{{ userProfile.email }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
