<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <h3>{{ $t('contact.email') }}</h3>
              <a href="qindonghao0504@gmail.com">qindonghao0504@gmail.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="10" r="4"></circle>
                <path d="M7 14l-.6 3.2L9.5 15"></path>
                <circle cx="16" cy="13" r="4"></circle>
                <path d="M15 17.5l-.4 2.5L17.5 19"></path>
                <circle cx="8" cy="9" r="0.5" fill="currentColor" stroke="none"></circle>
                <circle cx="10" cy="9" r="0.5" fill="currentColor" stroke="none"></circle>
                <circle cx="15" cy="12" r="0.5" fill="currentColor" stroke="none"></circle>
                <circle cx="17" cy="12" r="0.5" fill="currentColor" stroke="none"></circle>
              </svg>
            </div>
            <div>
              <h3>{{ $t('contact.wechat') }}</h3>
              <span class="contact-text">Mushui54</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h3>{{ $t('contact.phone') }}</h3>
              <a href="tel:+1234567890">(+86) 1314 2050 487</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <footer class="footer">
    <p>&copy; 2024 {{ $t('hero.name') }}. {{ $t('contact.footer') }}</p>
  </footer>
</template>

<style scoped>
.contact {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
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
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  width: 100%;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.icon-wrapper {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-item h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
}

.info-item a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.contact-text {
  color: white;
  opacity: 0.9;
  display: inline-block;
}

.info-item a:hover {
  opacity: 1;
  text-decoration: underline;
}

.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social-links h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.social-icon:hover {
  background: white;
  color: #667eea;
  transform: translateY(-5px);
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
}

.footer p {
  margin: 0;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 1rem;
    padding-top: calc(70px + 3rem);
  }

  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
