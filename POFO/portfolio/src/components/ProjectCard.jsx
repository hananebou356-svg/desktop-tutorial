import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} className="btn btn-primary me-2">View Project</a>
        <a href={project.github} className="btn btn-outline-secondary">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
