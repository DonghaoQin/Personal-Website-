<template>
  <div class="skills-page">
    <SkillsSection />
  </div>
</template>

<script setup>
import SkillsSection from '../components/Skills.vue'
</script>

<style scoped>
.skills-page {
  min-height: calc(100vh - 70px);
  padding-top: 70px;
}
</style>
