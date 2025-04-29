<script setup>
</script>

<template>
  <div>
    <nav class="text-[40px] ml-[450px] text-gray-900  flex items-center gap-[20px]">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

 