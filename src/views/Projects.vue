<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>

      <!-- Filter buttons -->
      <div class="filter-buttons">
        <button
          :class="['filter-btn', { active: selectedFilter === 'all' }]"
          @click="selectedFilter = 'all'"
        >
          {{ $t('projects.all') }}
        </button>
        <button
          v-for="tech in allTechnologies"
          :key="tech"
          :class="['filter-btn', { active: selectedFilter === tech }]"
          @click="selectedFilter = tech"
        >
          {{ tech }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                <span>{{ $t('projects.demo') }}</span>
              </a>
              <a v-if="project.code" :href="project.code" target="_blank" class="project-link">
                <span>{{ $t('projects.code') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const selectedFilter = ref('all')

const projects = computed(() => [
  {
    id: 1,
    title: t('projects.sampleProjects.ecommerce.title'),
    description: t('projects.sampleProjects.ecommerce.description'),
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    demo: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 2,
    title: t('projects.sampleProjects.taskManager.title'),
    description: t('projects.sampleProjects.taskManager.description'),
    image: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'Firebase', 'TypeScript'],
    demo: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 3,
    title: t('projects.sampleProjects.weather.title'),
    description: t('projects.sampleProjects.weather.description'),
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'API', 'CSS'],
    demo: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 4,
    title: t('projects.sampleProjects.blog.title'),
    description: t('projects.sampleProjects.blog.description'),
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    demo: 'https://example.com',
    code: 'https://github.com'
  }
])

const allTechnologies = computed(() => {
  const techSet = new Set()
  projects.value.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech))
  })
  return Array.from(techSet)
})

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project =>
    project.technologies.includes(selectedFilter.value)
  )
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
  max-width: 1200px;
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
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
  background: #667eea;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.project-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e9ecef;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #495057;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  flex: 1;
  text-align: center;
  padding: 0.6rem 1rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background 0.3s;
}

.project-link:hover {
  background: #5568d3;
}

@media (max-width: 768px) {
  .projects {
    padding: 3rem 1rem;
    padding-top: calc(70px + 3rem);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
