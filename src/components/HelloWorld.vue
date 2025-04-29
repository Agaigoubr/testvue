<script setup>
import { ref } from 'vue'

// تعريف متغير باستخدام ref
const name = ref('page ')
const nome = ref('page2 ')

</script>

<template>
  <h1 class="text-blue-600">{{ name }}</h1>
  <h2>{{ nome }}</h2>

</template>

