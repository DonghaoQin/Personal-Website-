<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-image">
        <img src="https://via.placeholder.com/200" alt="Your Photo" />
      </div>
      <h1 class="hero-title">{{ $t('hero.greeting') }} <span class="highlight">{{ $t('hero.name') }}</span></h1>
      <p class="hero-subtitle">{{ $t('hero.title') }}</p>
      <p class="hero-description">
        {{ $t('hero.description') }}
      </p>
      <div class="skills-tags">
        <span class="tag" v-for="skill in $t('hero.coreSkills')" :key="skill">{{ skill }}</span>
      </div>
      <div class="hero-buttons">
        <router-link to="/projects" class="btn btn-primary">{{ $t('hero.viewProjects') }}</router-link>
        <router-link to="/contact" class="btn btn-secondary">{{ $t('hero.contactMe') }}</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-content {
  max-width: 800px;
  text-align: center;
}

.hero-image {
  margin-bottom: 2rem;
}

.hero-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.highlight {
  color: #42b883;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
</style>
