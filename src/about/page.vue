<script setup>
import { ref } from 'vue'

const name = ref('About')
const nome = ref("Hello, I'm the About page")
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ nome }}</h2>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
  font-size: 2em;
}

h2 {
  color: #35495e;
}
</style>
