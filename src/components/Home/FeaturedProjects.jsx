import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/projectsData';
import CustomButton from '../Common/CustomButton';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="featured-projects">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        
        <div className="carousel-slide">
          <div className="project-slide">
            <h3 className="project-title">{featuredProjects[currentSlide].title}</h3>
            <p className="project-description">{featuredProjects[currentSlide].description}</p>
            <div className="technologies">
              {featuredProjects[currentSlide].technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <Link to={`/projects/${featuredProjects[currentSlide].id}`}>
              <CustomButton variant="outline" text="Ver Más" />
            </Link>
          </div>
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
        
        <div className="carousel-dots">
          {featuredProjects.map((_, index) => (
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