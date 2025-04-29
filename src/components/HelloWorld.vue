<script setup>
import { ref } from 'vue'

const name = ref('page')
const nome = ref('Devlopper') 
</script>

<template>
  <div class="relative min-h-screen">
    <img 
      class="mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%  p-1 w-full h-full rounded-[100px] object-cover"
      src="/ava.jpg" 
      alt="avatar"
    >
    
   
    <h1 class="absolute top-[600px] text-[100px] font-bold text-white drop-shadow-lg">
      {{ nome }}
    </h1>
    

    <h1 class="text-blue-600 text-2xl fixed bottom-4 right-4">
      {{ name }}
    </h1>
  </div>
</template>