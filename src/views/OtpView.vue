<script setup lang="ts">
   import InputOtp from "../components/InputOtp.vue";
   import { onMounted, onUnmounted, ref } from "vue";
   import { API_SendOTP, type IParamSendOTP } from "../services/sms.otp";
   import { formatTime } from "../helper/text.transform";

   const otp = ref(0)
   const countDown = ref(0)

const resendOtp = async () => {
      const payload : IParamSendOTP = {
         channel: "sms",
         sender: "GetOTP",
         phone: "6281222863028",
         template: "6d16aa9d-bf19-4141-8169-48b46d972fc6",
         code_length: 4
      }
      if (!payload )return
      // await API_SendOTP(payload)
   }

const handleOtp = (value: number) => {
      otp.value = value
   }

onMounted(() =>countDown.value = 60 * 5)
const timer = setInterval(() => countDown.value--, 1000)
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