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
              @click="openProjectDetails(project)"
            >
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
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

    <!-- Project Detail Modal -->
    <Transition name="modal-fade">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div v-if="selectedProject" class="modal-content">
            <!-- Left Column: Image -->
            <div class="modal-image">
              <img :src="selectedProject.image" :alt="selectedProject.title" />
            </div>

            <!-- Right Column: Details -->
            <div class="modal-details">
              <h2 class="modal-title">{{ selectedProject.title }}</h2>

              <div class="modal-description">
                <p v-for="(paragraph, index) in selectedProject.detailedDescription.split('\n\n')" :key="index">
                  {{ paragraph }}
                </p>
              </div>

              <div class="modal-technologies">
                <h3>{{ $t('projects.technologiesUsed') }}</h3>
                <p>{{ selectedProject.technologies }}</p>
              </div>

              <div class="modal-links">
                <a
                  v-if="selectedProject.demoLink"
                  :href="selectedProject.demoLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-btn demo-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  {{ $t('projects.viewLive') }}
                </a>
                <a
                  v-if="selectedProject.githubLink"
                  :href="selectedProject.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-btn github-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  {{ $t('projects.viewCode') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
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

const selectedProject = ref(null)
const showModal = ref(false)

const originalProjects = [
  {
    id: 1,
    title: t('projects.details.ecommerce.title'),
    shortDesc: t('projects.details.ecommerce.shortDesc'),
    author: 'Hello Auslan',
    role: 'Full Stack Web Application',
    image: '/images/projects/auslan-learning.png',
    detailedDescription: t('projects.details.ecommerce.description'),
    technologies: t('projects.details.ecommerce.technologies'),
    demoLink: 'https://helloauslan.me/home',
    githubLink: 'https://github.com/DonghaoQin/5120-Auslan-Program'
  },
  {
    id: 2,
    title: t('projects.details.taskManager.title'),
    shortDesc: t('projects.details.taskManager.shortDesc'),
    author: 'Elderly Population',
    role: 'Full Stack Health Platform',
    image: '/images/projects/elderly population.png',
    detailedDescription: t('projects.details.taskManager.description'),
    technologies: t('projects.details.taskManager.technologies'),
    demoLink: 'https://elderly-populations.vercel.app/',
    githubLink: 'https://github.com/DonghaoQin/Elderly-populations'
  },
  {
    id: 3,
    title: t('projects.details.weather.title'),
    shortDesc: t('projects.details.weather.shortDesc'),
    author: 'John Doe',
    role: 'UI/UX Developer',
    image: '/images/projects/food%20donation.png', // new image from /public
    detailedDescription: t('projects.details.weather.description'),
    technologies: t('projects.details.weather.technologies'),
    demoLink: 'https://www.figma.com/design/auTtnrCAqfinN0HGTe7NMN/5152?node-id=0-1&t=F60kfU6pGvtAnWfD-1',
    githubLink: 'https://github.com/yourusername/weather-dashboard'
  },

  {
    id: 4,
    title: t('projects.details.blog.title'),
    shortDesc: t('projects.details.blog.shortDesc'),
    author: 'John Doe',
    role: 'Backend Developer',
    image: '/images/projects/ecoparking.png',
    detailedDescription: t('projects.details.blog.description'),
    technologies: t('projects.details.blog.technologies'),
    demoLink: 'https://example.com/blog-platform',
    githubLink: 'https://github.com/yourusername/blog-platform'
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

const openProjectDetails = (project) => {
  // Find the original project (without carousel duplicates)
  const originalProject = originalProjects.find(p => p.id === project.id)
  selectedProject.value = originalProject
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  overflow-y: auto;
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-close:hover {
  background: #667eea;
  transform: rotate(90deg);
}

.modal-close:hover svg {
  stroke: white;
}

.modal-close svg {
  stroke: #2c3e50;
  transition: stroke 0.3s ease;
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 90vh;
  overflow: hidden;
}

.modal-image {
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  padding: 3rem;
  overflow-y: auto;
  max-height: 90vh;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.modal-description {
  margin-bottom: 2rem;
}

.modal-description p {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1rem;
}

.modal-technologies {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.modal-technologies h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.modal-technologies p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6c757d;
}

.modal-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.github-btn {
  background: #24292e;
  color: white;
}

.github-btn:hover {
  background: #0366d6;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(3, 102, 214, 0.4);
}

/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9);
  opacity: 0;
}

/* Modal Responsive Design */
@media (max-width: 1024px) {
  .modal-content {
    grid-template-columns: 1fr;
  }

  .modal-image {
    max-height: 400px;
  }

  .modal-details {
    padding: 2rem;
  }

  .modal-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }

  .modal-container {
    border-radius: 15px;
  }

  .modal-close {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
  }

  .modal-image {
    max-height: 300px;
  }

  .modal-details {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .modal-description p {
    font-size: 0.95rem;
  }

  .modal-technologies {
    padding: 1.25rem;
  }

  .modal-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .modal-details {
    padding: 1rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-links {
    flex-direction: column;
  }

  .modal-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
