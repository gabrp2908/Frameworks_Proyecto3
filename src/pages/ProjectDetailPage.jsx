import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import ProjectSlider from '../components/Projects/ProjectSlider';
import CustomButton from '../components/Common/CustomButton';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="not-found">
        <h2>Proyecto no encontrado</h2>
        <button onClick={() => navigate('/projects')}>Volver a Proyectos</button>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <button className="back-button" onClick={() => navigate('/projects')}>
        ← Volver a Proyectos
      </button>
      
      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        <div className="project-detail-meta">
          <span className="project-year">{project.year}</span>
          <span className="project-duration">{project.duration}</span>
        </div>
      </div>
      
      <div className="project-detail-content">
        <div className="project-detail-left">
          <ProjectSlider images={project.images} />
          
          <div className="project-description-section">
            <h3>Descripción</h3>
            <p>{project.description}</p>
          </div>
          
          <div className="project-features-section">
            <h3>Características Principales</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="project-detail-right">
          <div className="project-info-card">
            <h3>Información del Proyecto</h3>
            
            <div className="info-group">
              <strong>Duración:</strong>
              <span>{project.duration}</span>
            </div>
            
            <div className="info-group">
              <strong>Colaboradores:</strong>
              <span>{project.collaborators}</span>
            </div>
            
            <div className="info-group">
              <strong>Estado:</strong>
              <span className="status-completed">Completado</span>
            </div>
            
            <div className="technologies-section">
              <h4>Tecnologías Utilizadas</h4>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {project.repository && (
              <div className="repository-section">
                <a 
                  href={project.repository} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repository-link"
                >
                  <CustomButton variant="primary" text="Ver Repositorio" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;