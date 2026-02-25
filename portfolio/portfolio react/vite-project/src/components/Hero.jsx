import React from 'react';
import { personalData } from '../data/personalData';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`hero-section d-flex align-items-center ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}
      style={{
        minHeight: '100vh',
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3 animate-fade-in">
                Hi, I'm <span className="text-primary">{personalData.name}</span>
              </h1>
              <h2 className="h3 mb-4 text-muted animate-slide-up">
                {personalData.role}
              </h2>
              <p className="lead mb-4 animate-slide-up delay-1">
                {personalData.intro}
              </p>
              <div className="hero-buttons animate-slide-up delay-2">
                <button
                  className="btn btn-primary btn-lg me-3 mb-3"
                  onClick={() => scrollToSection('projects')}
                >
                  <i className="fas fa-eye me-2"></i>View My Work
                </button>
                <button
                  className="btn btn-outline-light btn-lg mb-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-image animate-fade-in delay-1">
              <div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                style={{
                  width: '300px',
                  height: '300px',
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <i className="fas fa-user fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
