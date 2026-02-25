import React from 'react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
        <p>Welcome to my portfolio. I create amazing web applications.</p>
        <button className="btn-custom" onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="btn-custom" onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </section>
  );
};

export default Home;
