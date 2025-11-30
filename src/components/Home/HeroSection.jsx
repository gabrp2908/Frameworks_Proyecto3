import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Common/CustomButton';
import './HeroSection.css';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV_GR.pdf';
    link.download = 'CV_Gabriela_Rey.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Gabriela Rey</h1>
          <h2 className="hero-subtitle">
            Ingeniero de Telecomunicaciones, Estudiante de Ingeniería de Computación
          </h2>
          <p className="hero-description">
            ¡Hola y gracias por visitar mi portafolio! Aquí encontrarás una selección de 
            mis proyectos profesionales en ingeniería, programación y desarrollo web. 
            Cada trabajo refleja mi pasión por la tecnología, el aprendizaje constante 
            y la creación de soluciones prácticas e innovadoras.
            <br /><br />
            Explora, descubre y conoce más sobre lo que hago. 🚀
          </p>
          <div className="hero-buttons">
            <Link to="/projects">
              <CustomButton variant="primary" text="Ver Proyectos" />
            </Link>
            <CustomButton 
              variant="secondary" 
              text="Descargar CV" 
              onClick={handleDownloadCV}
            />
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span className="initials">GR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;