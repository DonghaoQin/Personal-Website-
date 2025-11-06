<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

      <!-- Skills Grid -->
      <div class="skills-section">
        <h3 class="subsection-title">{{ $t('skills.technicalSkills') }}</h3>
        <div class="skills-grid">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category">
            <h4 class="category-title">{{ category.name }}</h4>
            <div class="skill-items">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-section">
        <h3 class="subsection-title">{{ $t('skills.experienceEducation') }}</h3>
        <div class="timeline">
          <div v-for="(item, index) in timeline" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ item.date }}</div>
              <h4 class="timeline-title">{{ item.title }}</h4>
              <p class="timeline-company">{{ item.company }}</p>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skillCategories = computed(() => [
  {
    name: t('skills.categories.frontend'),
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript/TypeScript', level: 90 }
    ]
  },
  {
    name: t('skills.categories.backend'),
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    name: t('skills.categories.database'),
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 }
    ]
  }
])

const timeline = computed(() => [
  {
    date: '2023 - Present',
    title: t('skills.timeline.senior.title'),
    company: t('skills.timeline.senior.company'),
    description: t('skills.timeline.senior.description')
  },
  {
    date: '2021 - 2023',
    title: t('skills.timeline.fullstack.title'),
    company: t('skills.timeline.fullstack.company'),
    description: t('skills.timeline.fullstack.description')
  },
  {
    date: '2019 - 2021',
    title: t('skills.timeline.frontend.title'),
    company: t('skills.timeline.frontend.company'),
    description: t('skills.timeline.frontend.description')
  },
  {
    date: '2015 - 2019',
    title: t('skills.timeline.education.title'),
    company: t('skills.timeline.education.company'),
    description: t('skills.timeline.education.description')
  }
])
</script>

<style scoped>
.skills {
  padding: 5rem 2rem;
  background: white;
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
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.skills-section {
  margin-bottom: 5rem;
}

.subsection-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.category-title {
  font-size: 1.3rem;
  color: #667eea;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #2c3e50;
}

.skill-level {
  color: #667eea;
  font-weight: 600;
}

.skill-bar {
  height: 10px;
  background: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 5px;
  transition: width 1s ease;
}

.timeline-section {
  margin-top: 5rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea, #764ba2);
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 15px;
  height: 15px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-left: 1rem;
}

.timeline-date {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.timeline-company {
  color: #6c757d;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.timeline-description {
  color: #495057;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .skills {
    padding: 3rem 1rem;
    padding-top: calc(70px + 3rem);
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-dot {
    left: -2.25rem;
  }
}
</style>
