<script lang="ts" setup>
import { UserIcon } from '@heroicons/vue/20/solid';

const userProfile: {
  name: string;
  email: string;
  avatar: string;
} = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '',
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      userProfile.avatar = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

</script>

<template >
  <main>
    <div class="flex flex-col items-center h-screen gap-3 p-3 ">
      <div class="flex flex-col items-center mt-20 gap-3">
        <div class="border border-gray-200 p-4 rounded-full cursor-pointer">
          <input type="file" @change="handleFileChange" class="absolute h-20 w-20 opacity-0 cursor-pointer" />
          <span v-if="!userProfile.avatar" class="cursor-pointer" >
            <UserIcon class="h-12 w-12 text-gray-400 cursor-pointer" />
          </span>
          <span v-else class="cursor-pointer">
            <img :src="userProfile.avatar" width="48" height="48" alt="User Profile" class="cursor-pointer object-contain" />
          </span>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-base">{{ userProfile.name }}</h1>
          <p class="text-gray-500 text-sm">{{ userProfile.email }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
