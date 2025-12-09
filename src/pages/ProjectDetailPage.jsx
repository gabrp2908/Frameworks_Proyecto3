import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import CustomButton from '../components/Common/CustomButton';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  const [showImages, setShowImages] = useState(true);

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
      
      <h1 className="project-detail-title">{project.title}</h1>
      
      <div className="media-buttons">
        <CustomButton 
          variant={showImages ? "primary" : "outline"} 
          text="Ver Imágenes" 
          onClick={() => setShowImages(true)} 
        />
        <CustomButton 
          variant={!showImages ? "primary" : "outline"} 
          text="Ver Video" 
          onClick={() => setShowImages(false)} 
        />
      </div>
      
      <div className="project-detail-content">
        <div className="project-detail-left">
          {showImages ? (
            <div className="carousel-container">
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`${project.title} ${index + 1}`} className="carousel-image" />
              ))}
            </div>
          ) : (
            <div className="video-container">
              {project.videos.map((video, index) => (
                <video key={index} controls className="carousel-video">
                  <source src={video} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              ))}
            </div>
          )}
          
          <div className="project-description-section">
            <h3>Descripción del Proyecto</h3>
            <p>{project.detailedDescription}</p>
          </div>
          
          <div className="project-features-section">
            <h3>Características Clave</h3>
            <ul>
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="project-detail-right">
          <div className="project-info-card">
            <h3>Información General</h3>
            
            <div className="info-group">
              <strong>Duración:</strong>
              <span>{project.duration}</span>
            </div>
            
            <div className="info-group">
              <strong>Colaboradores:</strong>
              <span>{project.collaborators.join(', ')}</span>
            </div>
            
            <div className="info-group">
              <strong>Estado:</strong>
              <span className={`status-${project.status.toLowerCase()}`}>{project.status}</span>
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