<template>
  <div class="contact-page">
    <ContactSection />
  </div>
</template>

<script setup>
import ContactSection from '../components/Contact.vue'
</script>

<style scoped>
.contact-page {
  min-height: calc(100vh - 70px);
  padding-top: 70px;
}
</style>
