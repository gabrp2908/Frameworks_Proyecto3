import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Gabriela Rey</h3>
          <p className="footer-description">
            Ingeniero de Telecomunicaciones & Estudiante de Ingeniería de Computación
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/about">Sobre Mí</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="contact-info">
            <li>Email: gabrp2908@gmail.com</li>
            <li>Teléfono: +58 4246187804</li>
            <li>Ubicación: Maracaibo, Venezuela</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Gabriela Rey. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;