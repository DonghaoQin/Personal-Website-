<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-pill">
        <ul class="nav-menu" :class="{ active: menuActive }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">{{ $t('nav.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" @click="closeMenu">{{ $t('nav.projects') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" @click="closeMenu">{{ $t('nav.about') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" @click="closeMenu">{{ $t('nav.contact') }}</router-link>
          </li>
          <li class="nav-item nav-lang">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
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
import LanguageSwitcher from './LanguageSwitcher.vue'

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
  z-index: 1000;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-pill {
  background: white;
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(240, 158, 5, 0.886);
  backdrop-filter: blur(10px);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s;
  display: block;
}

.nav-link:hover {
  background: #ff9500;
  color: white;
}

.nav-link.router-link-active {
  background: #ff9500;
  color: white;
}

.nav-lang {
  margin-left: 0.5rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  right: 2rem;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #2c3e50;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 968px) {
  .navbar {
    padding: 1rem;
  }

  .nav-pill {
    padding: 0.4rem;
  }

  .nav-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .nav-menu {
    gap: 0.3rem;
  }
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-pill {
    position: relative;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 80px;
    flex-direction: column;
    background-color: white;
    width: calc(100% - 2rem);
    margin: 0 1rem;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(161, 48, 48, 0.1);
    padding: 1.5rem;
    border-radius: 20px;
    gap: 0.5rem;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    width: 100%;
    padding: 1rem;
  }

  .nav-lang {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>
