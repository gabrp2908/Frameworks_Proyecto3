import React, { useState } from 'react';
import './ProjectSlider.css';

const ProjectSlider = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-slider">
      <div className="slider-container">
        {images.length > 0 ? (
          <>
            <div className="slider-image">
              <div className="image-placeholder">
                <span className="image-text">Imagen {currentImage + 1}</span>
              </div>
            </div>
            
            {images.length > 1 && (
              <>
                <button className="slider-btn prev" onClick={prevImage}>‹</button>
                <button className="slider-btn next" onClick={nextImage}>›</button>
                
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${index === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="no-images">
            <div className="image-placeholder">
              <span className="image-text">Sin imágenes disponibles</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="video-section">
        <h4>Video del Proyecto</h4>
        <div className="video-placeholder">
          <span>Video demostrativo del proyecto</span>
          <small>Los videos se cargarían aquí en una implementación real</small>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;