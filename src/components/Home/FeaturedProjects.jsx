import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import CustomButton from '../Common/CustomButton';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const autoPlayRef = useRef(null);

  // Configurar el desplazamiento automático
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection('next');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 300); // Duración de la animación
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection('prev');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 300); // Duración de la animación
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setDirection(index > currentSlide ? 'next' : 'prev');
    
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300); // Duración de la animación
  };

  return (
    <section className="featured-projects">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <button 
            className="carousel-btn prev" 
            onClick={handlePrev}
            aria-label="Slide anterior"
            disabled={isTransitioning}
          >
            ‹
          </button>
          
          <div className={`carousel-slide ${direction} ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="project-slide">
              <div className="image-container">
                <img 
                  src={projects[currentSlide].mainImage} 
                  alt={projects[currentSlide].title} 
                  className="project-image" 
                />
              </div>
              <h3 className="project-title">{projects[currentSlide].title}</h3>
              <p className="project-description">{projects[currentSlide].shortDescription}</p>
              <div className="technologies">
                {projects[currentSlide].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <Link to={`/projects/${projects[currentSlide].id}`}>
                <CustomButton variant="outline" text="Ver Más" />
              </Link>
            </div>
          </div>
          
          <button 
            className="carousel-btn next" 
            onClick={handleNext}
            aria-label="Slide siguiente"
            disabled={isTransitioning}
          >
            ›
          </button>
        </div>
        
        <div className="carousel-controls">
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;