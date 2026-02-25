import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="project-card">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
