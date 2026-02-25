import React from 'react';
import profileImage from '../assets/profile.avif';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">Hi, I'm Your Name</h1>
            <p className="lead">Frontend Developer & UI/UX Designer</p>
            <p className="mb-4">
              I create beautiful and functional web experiences that delight users.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg me-3">View My Work</a>
            <a href="#contact" className="btn btn-outline-primary btn-lg">Get In Touch</a>
          </div>
          <div className="col-md-6 text-center">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
