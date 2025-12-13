import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import CustomButton from '../components/Common/CustomButton';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  
  const [showImages, setShowImages] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);
  const videoRefs = useRef([]);
  const autoPlayRef = useRef(null);
  
  // Determinar si estamos mostrando imágenes o videos
  const currentMedia = showImages ? project.images : project.videos;
  const isVideo = !showImages;
  
  // Configurar autoplay solo para imágenes
  useEffect(() => {
    if (showImages && currentMedia.length > 1) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [showImages, currentMedia.length]);
  
  // Pausar todos los videos al cambiar de slide
  useEffect(() => {
    if (isVideo) {
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [currentIndex, isVideo]);
  
  // Resetear índice al cambiar entre imágenes y videos
  useEffect(() => {
    setCurrentIndex(0);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, [showImages]);
  
  const handleNext = () => {
    if (isTransitioning || currentMedia.length <= 1) return;
    
    // Pausar video actual si estamos en modo video
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setDirection('next');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentMedia.length);
      setIsTransitioning(false);
    }, 400);
  };
  
  const handlePrev = () => {
    if (isTransitioning || currentMedia.length <= 1) return;
    
    // Pausar video actual si estamos en modo video
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setDirection('prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
      setIsTransitioning(false);
    }, 400);
  };
  
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex || currentMedia.length <= 1) return;
    
    // Pausar video actual si estamos en modo video
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };
  
  const handleVideoPlay = (index) => {
    // Pausar todos los otros videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };
  
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
          text={`Ver Imágenes (${project.images.length})`} 
          onClick={() => setShowImages(true)} 
        />
        <CustomButton 
          variant={!showImages ? "primary" : "outline"} 
          text={`Ver Videos (${project.videos.length})`} 
          onClick={() => setShowImages(false)} 
        />
      </div>
      
      <div className="project-detail-content">
        <div className="project-detail-left">
          {/* Slider de medios */}
          <div className="media-slider-container">
            <div className={`media-slider-track ${direction} ${isTransitioning ? 'transitioning' : ''}`}>
              {currentMedia.map((media, index) => (
                <div 
                  key={index}
                  className={`media-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  {isVideo ? (
                    <div className="video-container">
                      <video 
                        ref={el => videoRefs.current[index] = el}
                        controls 
                        className="carousel-video"
                        poster={project.mainImage}
                        onPlay={() => handleVideoPlay(index)}
                      >
                        <source src={media} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                      {!videoRefs.current[index]?.paused || (
                        <div className="video-placeholder">
                          <div className="play-hint">
                            <span className="play-icon">▶</span>
                            <span className="play-text">Haz clic para reproducir</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img 
                      src={media} 
                      alt={`${project.title} ${index + 1}`} 
                      className="carousel-image" 
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Controles de navegación */}
            {currentMedia.length > 1 && (
              <>
                <button 
                  className="slider-nav-btn prev-btn"
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  aria-label="Anterior"
                >
                  ‹
                </button>
                
                <button 
                  className="slider-nav-btn next-btn"
                  onClick={handleNext}
                  disabled={isTransitioning}
                  aria-label="Siguiente"
                >
                  ›
                </button>
                
                {/* Indicadores de posición */}
                <div className="slider-indicators">
                  {currentMedia.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-indicator ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      disabled={isTransitioning}
                      aria-label={`Ir a ${isVideo ? 'video' : 'imagen'} ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Contador */}
                <div className="slider-counter">
                  <span className="current-index">{currentIndex + 1}</span>
                  <span className="separator">/</span>
                  <span className="total-count">{currentMedia.length}</span>
                </div>
              </>
            )}
            
          </div>
          
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