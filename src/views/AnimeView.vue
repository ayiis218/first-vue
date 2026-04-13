<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { API_GetAnime, type IRsAnimeItem } from '../services/list.anime'
import { McLoading4Fill } from '@kalimahapps/vue-icons'

const anime = ref<IRsAnimeItem[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    anime.value = await API_GetAnime()
  } catch (e: any) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="bg-black w-full h-full">
    <div class="flex flex-col items-center justify-center h-full">
      <div v-if="loading" class="h-screen w-full flex flex-col gap-3 justify-center items-center">
        <McLoading4Fill class="text-indigo-500 w-14 h-14 text-center animate-spin animate-duration-500" />
      </div>    
      <p v-if="error" class="text-black text-center transition-all duration-300 hover:scale-95">{{ error }}</p>
      <ul v-else class="flex flex-col gap-2 overflow-y-auto p-5">
        <li class="rounded-lg" v-for="item in anime" :key="item.id">
            <a :href="`/anime/${item?.id}`" class="flex flex-col w-full h-full p-3 rounded-lg border border-slate-500 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 cursor-pointer">
              <h1 class="text-indigo-500 font-bold transition-all duration-300">{{ item?.name }}</h1>
              <img :src="item?.image" alt="img" style="width: 60px; height: 100px" />
              <p class="text-slate-500 font-medium">{{ item?.description }}</p>
            </a>  
          </li>
        </ul>
        </div>
  </main>
</template>
