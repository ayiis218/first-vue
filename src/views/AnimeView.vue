<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { API_GetAnime, type IRsAnimeItem } from "../services/list.anime"

	const anime = ref<IRsAnimeItem[]>([])
	const loading = ref(false)
	const error = ref<string | null>(null)

	onMounted(async () => {
		try {
			loading.value = true
			anime.value = await API_GetAnime()
		} catch (e:any) {
			error.value = e?.message
		} finally {
			loading.value = false
		}
	})
</script>

<template>
	<main>
		<div class="flex flex-col w-full h-[calc(100vh-64px)] bg-white m-3 rounded-md shadow-md overflow-y-auto">
			<div class="sticky top-0 z-10 bg-white shadow-md p-2">
				<h1 class="text-black font-bold ">This is a Anime page</h1>
			</div>
			<div class="m-3">
				<p v-if="loading">Loading...</p>
				<p v-if="error">{{ error }}</p>
				<ul v-if="!loading">
					<li class="gap-2 shadow-md p-2 rounded-md" v-for="item in anime" :key="item.id">
							<div class="flex flex-col w-full h-full p-3 rounded-md">
							<h2 class="text-black font-bold">{{ item	?.name }}</h2>
							<img :src="item?.image" alt="img" style="width: 60px; height: 100px;">
							<p class="text-black">{{ item?.description }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>