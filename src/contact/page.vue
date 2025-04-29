<script setup>
import { ref } from 'vue'

// تعريف متغيرات باستخدام ref
const na = ref('Contact')
const hello = ref("Hello, I'm the Contact page")
</script>

<template>
  <div>
    <h1 class="text-red-200">{{ na }}</h1>
    <h2>{{ hello }}</h2>
  </div>
</template>

