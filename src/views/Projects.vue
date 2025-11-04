<template>
  <div class="projects-page">
    <ProjectsSection />
  </div>
</template>

<script setup>
import ProjectsSection from '../components/Projects.vue'
</script>

<style scoped>
.projects-page {
  min-height: calc(100vh - 70px);
  padding-top: 70px;
}
</style>
