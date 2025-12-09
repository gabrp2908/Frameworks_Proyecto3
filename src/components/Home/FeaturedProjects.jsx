import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import CustomButton from '../Common/CustomButton';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="featured-projects">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        
        <div className="carousel-slide">
          <div className="project-slide">
            <img src={projects[currentSlide].mainImage} alt={projects[currentSlide].title} className="project-image" />
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
        
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
        
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;