import React from 'react';
import { personalData } from '../data/personalData';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
              {personalData.about}
            </p>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-code fa-3x text-primary mb-3"></i>
                    <h5 className="card-title">Experience</h5>
                    <p className="card-text">{personalData.experience} years</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-project-diagram fa-3x text-success mb-3"></i>
                    <h5 className="card-title">Projects</h5>
                    <p className="card-text">{personalData.projectsCount}+ completed</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-users fa-3x text-warning mb-3"></i>
                    <h5 className="card-title">Clients</h5>
                    <p className="card-text">{personalData.clientsCount}+ satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
