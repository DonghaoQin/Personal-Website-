<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
</script>

<style scoped>
.home {
  min-height: calc(100vh - 70px);
}
</style>
