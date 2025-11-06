<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>

      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        <div class="carousel-container" ref="carouselContainer">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
          >
            <div
              v-for="project in projects"
              :key="project.id"
              class="project-card"
            >
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
                <div class="project-overlay">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-author">{{ project.author }}</p>
                  <p class="project-role">{{ project.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="carousel-nav">
          <button
            class="nav-btn prev"
            @click="prevSlide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            class="nav-btn next"
            @click="nextSlide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentIndex = ref(0)
const carouselContainer = ref(null)
const cardWidth = ref(400)
const visibleCards = ref(3)
const isTransitioning = ref(false)

const originalProjects = [
  {
    id: 1,
    title: 'The Sky-Dweller is a compelling timepiece of contemporary design.',
    author: 'John Doe',
    role: 'CEO, Company Name',
    image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=800&fit=crop'
  },
  {
    id: 2,
    title: 'The Sky-Dweller is a compelling timepiece of contemporary design.',
    author: 'John Doe',
    role: 'CEO, Company Name',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=800&fit=crop'
  },
  {
    id: 3,
    title: 'The Sky-Dweller is a compelling timepiece of contemporary design.',
    author: 'John Doe',
    role: 'CEO, Company Name',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&h=800&fit=crop'
  },
  {
    id: 4,
    title: 'The Sky-Dweller is a compelling timepiece of contemporary design.',
    author: 'John Doe',
    role: 'CEO, Company Name',
    image: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?w=600&h=800&fit=crop'
  }
]

// Create infinite loop by duplicating projects array
const projects = computed(() => {
  return [...originalProjects, ...originalProjects, ...originalProjects]
})

const updateCardWidth = () => {
  if (carouselContainer.value) {
    const containerWidth = carouselContainer.value.offsetWidth
    if (window.innerWidth <= 768) {
      visibleCards.value = 1
      cardWidth.value = containerWidth
    } else if (window.innerWidth <= 1024) {
      visibleCards.value = 2
      cardWidth.value = containerWidth / 2
    } else {
      visibleCards.value = 3
      cardWidth.value = containerWidth / 3
    }
  }
}

const nextSlide = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true
  currentIndex.value++

  setTimeout(() => {
    // Reset to first set when reaching the end of second set
    if (currentIndex.value >= originalProjects.length * 2) {
      isTransitioning.value = false
      currentIndex.value = originalProjects.length
      // Remove transition temporarily for instant jump
      const track = document.querySelector('.carousel-track')
      track.style.transition = 'none'

      setTimeout(() => {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }, 50)
    } else {
      isTransitioning.value = false
    }
  }, 600)
}

const prevSlide = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true
  currentIndex.value--

  setTimeout(() => {
    // Reset to second set when reaching the start of first set
    if (currentIndex.value < originalProjects.length) {
      isTransitioning.value = false
      currentIndex.value = originalProjects.length * 2 - 1
      // Remove transition temporarily for instant jump
      const track = document.querySelector('.carousel-track')
      track.style.transition = 'none'

      setTimeout(() => {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }, 50)
    } else {
      isTransitioning.value = false
    }
  }, 600)
}

onMounted(() => {
  updateCardWidth()
  window.addEventListener('resize', updateCardWidth)
  // Start at the middle set for seamless looping
  currentIndex.value = originalProjects.length
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCardWidth)
})
</script>

<style scoped>
.projects {
  padding: 5rem 2rem;
  background: #f8f9fa;
  min-height: calc(100vh - 70px);
  padding-top: calc(70px + 5rem);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: #6c757d;
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.carousel-wrapper {
  position: relative;
  padding: 0 60px;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card {
  flex: 0 0 calc(33.333% - 14px);
  min-width: calc(33.333% - 14px);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 500px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  padding: 2.5rem 2rem;
  color: white;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: white;
}

.project-author {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.project-role {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Navigation Buttons */
.carousel-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #667eea;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

.nav-btn:hover:not(:disabled) svg {
  stroke: white;
}


.nav-btn svg {
  stroke: #2c3e50;
  transition: stroke 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-card {
    flex: 0 0 calc(50% - 10px);
    min-width: calc(50% - 10px);
    height: 450px;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 3rem 1rem;
    padding-top: calc(70px + 3rem);
  }

  .carousel-wrapper {
    padding: 0 40px;
  }

  .project-card {
    flex: 0 0 100%;
    min-width: 100%;
    height: 500px;
  }

  .carousel-track {
    gap: 15px;
  }

  .project-title {
    font-size: 1rem;
  }

  .nav-btn {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    padding: 0 30px;
  }

  .project-card {
    height: 400px;
  }

  .project-overlay {
    padding: 1.5rem 1rem;
  }

  .project-title {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .project-author {
    font-size: 1rem;
  }

  .project-role {
    font-size: 0.85rem;
  }
}
</style>
