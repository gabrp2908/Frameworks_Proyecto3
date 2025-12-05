import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const email = 'gabrp2908@gmail.com';

  // Datos de redes sociales
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/gabrp2908' },
    { name: 'GitHub', url: 'https://github.com/gabrp2908' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/gabriela-rey-033020394' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Gabriela Rey</h3>
          <p className="footer-description">
            Ingeniero de Telecomunicaciones y Estudiante de Ingeniería de Computación
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Redes Sociales</h4>
          <ul className="footer-social">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="contact-info">
            <li>
              Email:{' '}
              <a 
                href={`mailto:${email}`}
                className="email-link"
              >
                {email}
              </a>
            </li>
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