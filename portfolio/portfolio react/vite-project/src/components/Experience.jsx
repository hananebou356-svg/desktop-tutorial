import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to React 18 and TypeScript',
        'Mentored 5 junior developers'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and cloud services.',
      achievements: [
        'Built 15+ production applications',
        'Implemented CI/CD pipelines',
        'Reduced deployment time by 60%'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2018 - 2019',
      description: 'Worked on various web development projects, focusing on responsive design and user experience.',
      achievements: [
        'Developed responsive websites',
        'Collaborated with design team',
        'Learned modern JavaScript frameworks'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and web development fundamentals.'
    }
  ];

  return (
    <section
      id="experience"
      className={`py-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Experience & Education</h2>
            <p className="lead">My professional journey and educational background</p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="h2 fw-bold mb-4 text-center">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-marker ${theme === 'dark' ? 'bg-primary' : 'bg-primary'}`}></div>
                  <div className={`card border-0 shadow-sm mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white'}`}>
                    <div className="card-body">
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="card-title fw-bold mb-1">{exp.title}</h5>
                          <h6 className="card-subtitle mb-2 text-primary">{exp.company}</h6>
                        </div>
                        <span className={`badge ${theme === 'dark' ? 'bg-light text-dark' : 'bg-light text-dark'} fs-6`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="card-text mb-3">{exp.description}</p>
                      <div className="achievements">
                        <h6 className="fw-semibold mb-2">Key Achievements:</h6>
                        <ul className="list-unstyled">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="mb-1">
                              <i className="fas fa-check text-success me-2"></i>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="row">
          <div className="col-12">
            <h3 className="h2 fw-bold mb-4 text-center">Education</h3>
            <div className="row justify-content-center">
              {education.map((edu, index) => (
                <div key={index} className="col-lg-8">
                  <div className={`card border-0 shadow-sm ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white'}`}>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold mb-2">{edu.degree}</h5>
                      <h6 className="card-subtitle mb-2 text-primary">{edu.school}</h6>
                      <span className={`badge ${theme === 'dark' ? 'bg-light text-dark' : 'bg-light text-dark'} mb-3`}>
                        {edu.period}
                      </span>
                      <p className="card-text">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
