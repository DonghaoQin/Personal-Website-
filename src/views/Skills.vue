<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      <p class="section-subtitle">{{ $t('about.subtitle') }}</p>

      <!-- Professional Introduction -->
      <div class="about-section professional-section">
        <div class="section-header">
          <h3 class="subsection-title">{{ $t('about.professional.title') }}</h3>
        </div>
        <div class="professional-content">
          <div class="role-badge">{{ $t('about.professional.role') }}</div>
          <p class="description">{{ $t('about.professional.description') }}</p>
          <div class="tech-stack">
            <span class="tech-label">{{ $t('about.professional.techStack') }}</span>
          </div>
        </div>
      </div>

      <!-- What Drives Me -->
      <div class="about-section motivation-section">
        <div class="section-header">
          <h3 class="subsection-title">{{ $t('about.motivation.title') }}</h3>
        </div>
        <div class="motivation-content">
          <p class="description">{{ $t('about.motivation.description') }}</p>
          <div class="interests-grid">
            <div v-for="(interest, index) in $t('about.motivation.interests')" :key="index" class="interest-item">
              <span class="interest-icon">✓</span>
              <span class="interest-text">{{ interest }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="about-section education-section">
        <div class="section-header">
          <h3 class="subsection-title">{{ $t('about.education.title') }}</h3>
        </div>
        <div class="education-content">
          <div class="education-header">
            <div class="education-main">
              <h4 class="degree">{{ $t('about.education.degree') }}</h4>
              <p class="institution">{{ $t('about.education.institution') }}</p>
              <p class="period">{{ $t('about.education.period') }}</p>
            </div>
          </div>
          <p class="description">{{ $t('about.education.description') }}</p>
          <div class="highlights">
            <h5 class="highlights-title">Key Areas of Study:</h5>
            <div class="highlights-grid">
              <div v-for="(highlight, index) in $t('about.education.highlights')" :key="index" class="highlight-item">
                <span class="highlight-dot"></span>
                <span class="highlight-text">{{ highlight }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  min-height: calc(100vh - 70px);
  padding-top: calc(70px + 5rem);
}

.container {
  max-width: 1000px;
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

.about-section {
  margin-bottom: 4rem;
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.section-header {
  margin-bottom: 2rem;
}

.subsection-title {
  font-size: 1.8rem;
  color: #667eea;
  margin-bottom: 0;
  position: relative;
  display: inline-block;
}

.subsection-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* Professional Section */
.professional-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.role-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  align-self: flex-start;
}

.description {
  color: #495057;
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.tech-stack {
  background: #f8f9fa;
  padding: 1.2rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.tech-label {
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Motivation Section */
.motivation-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.interest-item:hover {
  background: #e9ecef;
}

.interest-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.interest-text {
  color: #2c3e50;
  font-size: 0.95rem;
}

/* Education Section */
.education-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f8f9fa;
}

.education-main {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.degree {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

.institution {
  color: #667eea;
  font-weight: 600;
  margin: 0;
  font-size: 1.05rem;
}

.period {
  color: #6c757d;
  margin: 0;
  font-size: 0.95rem;
}

.highlights {
  margin-top: 1rem;
}

.highlights-title {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.highlight-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  flex-shrink: 0;
}

.highlight-text {
  color: #495057;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .about {
    padding: 3rem 1rem;
    padding-top: calc(70px + 3rem);
  }

  .about-section {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .subsection-title {
    font-size: 1.5rem;
  }

  .interests-grid,
  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .education-header {
    flex-direction: column;
  }
}
</style>
