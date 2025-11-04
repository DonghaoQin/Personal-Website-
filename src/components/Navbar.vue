<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <a href="#home">Your Name</a>
      </div>
      <ul class="nav-menu" :class="{ active: menuActive }">
        <li class="nav-item">
          <a href="#home" class="nav-link" @click="closeMenu">Home</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link" @click="closeMenu">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#skills" class="nav-link" @click="closeMenu">Skills</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link" @click="closeMenu">Contact</a>
        </li>
      </ul>
      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuActive = ref(false)

const toggleMenu = () => {
  menuActive.value = !menuActive.value
}

const closeMenu = () => {
  menuActive.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #42b883;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #2c3e50;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 1rem 0;
  }
}
</style>
