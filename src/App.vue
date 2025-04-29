<script setup>
</script>

<template>
  <div>
    <nav class="sticky top-0 z-10 h-max max-w-full flex gap-[30px] bg-white/50 rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/contact">Contact</router-link> <transition-group>
      
      </transition-group>
    </nav>

    <router-view />
  </div>
</template>
