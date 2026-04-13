<script setup lang="ts">
import type { IRsAnimeItem } from '@/services/detail.characters'
import { ref, onMounted } from 'vue'
import { API_GetDetailCharacters } from '@/services/detail.characters'
import { useRoute } from 'vue-router'
import { McLoading4Fill } from '@kalimahapps/vue-icons'

const anime = ref<IRsAnimeItem>()
const loading = ref(false)
const error = ref<string | null>(null)
const route = useRoute()

onMounted(async () => {
  const name = route.params.name  
  try {
    loading.value = true
    anime.value = await API_GetDetailCharacters(name as string)
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
      <div v-else class="w-full flex flex-col gap-3">
        <p v-if="error" class="text-black text-center transition-all duration-300 hover:scale-95">{{ error }}</p>
        <div v-else class="flex flex-col gap-2 overflow-y-auto p-5 border border-slate-500 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 ">
        
          <!-- Character -->
          <div class="w-full flex flex-row gap-3">
            <div class="flex w-[20%]">
              <div class="object-cover w-60 h-80 border border-slate-500 rounded-lg hover:opacity-50 transition-all duration-300">
                <img :src="anime?.image" alt="img" class="w-full h-full rounded-lg"/>
              </div>
            </div>
            <div class="w-full flex flex-col gap-2">
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Name: </h1><span class="text-xl text-indigo-500 font-bold"> {{ anime?.name }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Ki: </h1><span class="text-slate-500 font-medium"> {{ anime?.ki }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Max Ki: </h1><span class="text-slate-500 font-medium"> {{ anime?.maxKi }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Race: </h1><span class="text-slate-500 font-medium"> {{ anime?.race }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Gender: </h1><span class="text-slate-500 font-medium"> {{ anime?.gender }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Affiliation: </h1><span class="text-slate-500 font-medium"> {{ anime?.affiliation }}</span>
              </div>
              <div  class="flex flex-row gap-2">
                <h1 class="w-[10%] text-lg font-bold">Origin Planet: </h1><span class="text-slate-500 font-medium"> {{ anime?.originPlanet?.name }}</span>
              </div>
              <p class="text-slate-500 font-medium w-full"> {{ anime?.description }}</p>
            </div>
          </div>

          <!-- Origin Planet -->
          <h1 class="text-lg font-bold">Origin Planet:</h1>
          <div class="object-cover w-full h-full border border-slate-500 rounded-lg hover:opacity-50 transition-all duration-300">
            <img :src="anime?.originPlanet.image" alt="img" class="w-full h-full rounded-lg"/>
          </div>

          <!-- Transformations -->
          <h1 class="text-lg font-bold">Transformations:</h1>
          <div class="flex flex-row gap-3 h-full">
            <div v-for="(item, index) in anime?.transformations" :key="index" class="h-full">
              <div class="flex flex-col justify-center items-center gap-3 h-full">
                  <div class="object-cover h-96 border border-slate-500 rounded-lg hover:opacity-50 transition-all duration-300">
                    <img :src="item.image" alt="img" class="w-full h-full rounded-lg"/>
                  </div>
                <h5 class="text-base font-bold">Name: <span class="text-slate-500 font-medium"> {{ item.name }}</span></h5>
                <h5 class="text-base font-bold">Ki: <span class="text-slate-500 font-medium"> {{ item.ki }}</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>