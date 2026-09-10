<script setup lang="ts">
   import InputOtp from "../components/InputOtp.vue";
   import { onMounted, onUnmounted, ref } from "vue";
   import { formatTime } from "../helper/text.transform";

   const COUNTDOWN_SECONDS = 60 * 5

   const otp = ref(0)
   const countDown = ref(0)

   // Pengiriman OTP sungguhan ada di src/services/sms.otp.ts dan sengaja belum
   // disambungkan supaya halaman demo ini tidak mengirim SMS betulan.
   const resendOtp = () => {
      countDown.value = COUNTDOWN_SECONDS
   }

   const handleOtp = (value: number) => {
      otp.value = value
   }

   const timer = setInterval(() => {
      if (countDown.value > 0) countDown.value--
   }, 1000)

   onMounted(() => (countDown.value = COUNTDOWN_SECONDS))
   onUnmounted(() => clearInterval(timer))


</script>

<template>
   <main>
      <div class="w-full h-full flex flex-col gap-3 ">
         <div class="w-full flex flex-row gap-3 ">
            <InputOtp @click="handleOtp" :value="otp"/>
         </div>
         <div class="flex flex-row gap-2">
            <span class="text-blue-500 self-start underline cursor-pointer hover:text-blue-600 " @click="resendOtp">Kirim Ulang</span>
            <span >{{ formatTime(countDown) }}</span>
         </div>
      </div>
   </main>
</template>