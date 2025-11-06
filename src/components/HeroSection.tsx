import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const roles = [
    'Influencer (>286K followers)',
    'Chromium Developer',
    'Web Developer',
    'Game Developer',
    'Game Critic',
    'Digital Nomad',
    'Trader'
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Orbiting Elements - Behind the card */}
        <div className="orbit-container">
          {/* Edge/Chromium Logo */}
          <div className="orbit-item orbit-1">
            <div className="orbit-icon edge-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.86 7.85c-.77-2.6-2.45-4.82-4.73-6.24C15.14.46 12.77 0 10.26 0 7.14 0 4.28 1.19 2.16 3.25.04 5.31-0.67 8.07.41 10.81c.77 2.6 2.45 4.82 4.73 6.24 1.99 1.15 4.36 1.61 6.87 1.61 3.12 0 5.98-1.19 8.1-3.25 2.12-2.06 2.83-4.82 1.75-7.56zm-9.6 11.4c-2.26 0-4.36-.46-6.04-1.46-1.98-1.15-3.43-3.08-4.08-5.4-.65-2.32-.19-4.73 1.27-6.79 1.46-2.06 3.71-3.25 6.35-3.25 2.26 0 4.36.46 6.04 1.46 1.98 1.15 3.43 3.08 4.08 5.4.65 2.32.19 4.73-1.27 6.79-1.46 2.06-3.71 3.25-6.35 3.25z"/>
              </svg>
            </div>
          </div>

          {/* Ethereum Logo */}
          <div className="orbit-item orbit-2">
            <div className="orbit-icon eth-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
              </svg>
            </div>
          </div>

          {/* Orange Circle 1 */}
          <div className="orbit-item orbit-3">
            <div className="orbit-icon orange-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
          </div>

          {/* Orange Circle 2 */}
          <div className="orbit-item orbit-4">
            <div className="orbit-icon orange-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Central Card */}
        <div className="profile-card">
          <div className="card-content">
            <div className="text-content">
              <h1 className="name">SamuelQZQ</h1>
              <div className="roles-list">
                {roles.map((role, index) => (
                  <div key={index} className="role-item">
                    <span className="role-bullet">▸</span>
                    <span className="role-text">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="profile-photo-container">
              <div className="profile-photo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="SamuelQZQ Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
