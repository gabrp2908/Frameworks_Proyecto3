import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Common/CustomButton';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="image-placeholder">
          <span className="image-text">Imagen de {project.title}</span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          <span className="project-duration">{project.duration}</span>
        </div>
        <p className="project-description">{project.description}</p>
        
        <div className="project-collaborators">
          <strong>Colaboradores:</strong> {project.collaborators}
        </div>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-actions">
          <Link to={`/projects/${project.id}`}>
            <CustomButton variant="primary" text="Ver Detalles" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;