import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-hero">
        <div className="about-hero-left">
          <div className="profile-photo-container">
            <div className="profile-photo-placeholder">
              <span className="profile-initials">GR</span>
            </div>
          </div>
        </div>
        
        <div className="about-hero-right">
          <h1 className="about-name">Gabriela Rey</h1>
          <h2 className="about-profession">Ingeniero de Telecomunicaciones</h2>
          <p className="about-summary">
            Estudiante de Ingeniería de Computación con experiencia en docencia universitaria, 
            análisis de sistemas y desarrollo de soluciones tecnológicas. Especializada en 
            redes de comunicación y programación.
          </p>
          <button 
            className="download-cv-btn"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/cv/CV_GR.pdf';
              link.download = 'CV_Gabriela_Rey.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            📄 Descargar CV
          </button>
        </div>
      </div>

      {/* Datos personales */}
      <div className="personal-info-card">
        <div className="info-grid">
          <div className="info-item">
            <strong>Email:</strong>
            <span>gabrp2908@gmail.com</span>
          </div>
          
          <div className="info-item">
            <strong>Teléfono:</strong>
            <span>+58 4246187804</span>
          </div>
          
          <div className="info-item">
            <strong>Ubicación:</strong>
            <span>Maracaibo, Venezuela</span>
          </div>
          
          <div className="info-item">
            <strong>Fecha de Nacimiento:</strong>
            <span>29 de agosto de 2002</span>
          </div>
          
          <div className="info-item">
            <strong>Nacionalidad:</strong>
            <span>Venezolana</span>
          </div>
          
          <div className="info-item">
            <strong>Estado Civil:</strong>
            <span>Soltero</span>
          </div>
        </div>
      </div>

      {/* Competencias e Idiomas en horizontal */}
      <div className="competencies-languages-row">
        <div className="competencies-card">
          <h3 className="card-title">Competencias Personales</h3>
          <div className="competencies-grid">
            <span className="competency-item">Liderazgo</span>
            <span className="competency-item">Análisis y síntesis</span>
            <span className="competency-item">Adaptabilidad</span>
            <span className="competency-item">Razonamiento lógico-matemático</span>
            <span className="competency-item">Facilidad de aprendizaje</span>
            <span className="competency-item">Trabajo en equipo</span>
            <span className="competency-item">Comunicación efectiva</span>
          </div>
        </div>

        <div className="languages-card">
          <h3 className="card-title">Idiomas</h3>
          <div className="languages-container">
            <div className="language-item">
              <div className="language-header">
                <strong>Español</strong>
                <span className="language-level">Nativo</span>
              </div>
              <div className="language-progress">
                <div className="progress-bar" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div className="language-item">
              <div className="language-header">
                <strong>Inglés</strong>
                <span className="language-level">C1 (Avanzado)</span>
              </div>
              <div className="language-progress">
                <div className="progress-bar" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resto del contenido en grid */}
      <div className="about-grid">
        <div className="about-section">
          <h2 className="section-title">Formación Académica</h2>
          
          <div className="education-item">
            <h3>Estudios en Ingeniería de Computación</h3>
            <div className="education-meta">
              <span className="education-date">Sep 2024 – Presente</span>
              <span className="education-institution">Universidad Rafael Urdaneta (URU), Maracaibo, Venezuela</span>
            </div>
          </div>
          
          <div className="education-item">
            <h3>Ingeniero de Telecomunicaciones</h3>
            <div className="education-meta">
              <span className="education-date">Ene 2020 – Abr 2024</span>
              <span className="education-institution">Universidad Rafael Urdaneta (URU), Maracaibo, Venezuela</span>
            </div>
            <div className="education-details">
              <p>• 12 certificados de Cuadro de Honor obtenidos</p>
              <p>• Promedio académico: 18,609 / 20,00</p>
            </div>
          </div>
          
          <div className="education-item">
            <h3>Bachiller en Ciencias</h3>
            <div className="education-meta">
              <span className="education-date">Sep 2008 – Jul 2019</span>
              <span className="education-institution">U. E. P. Colegio Nuestra Señora de Fátima, Maracaibo, Venezuela</span>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2 className="section-title">Experiencia Profesional</h2>
          
          <div className="experience-item">
            <h3>Docente Universitario</h3>
            <div className="experience-meta">
              <span className="experience-date">May 2024 – Presente</span>
              <span className="experience-company">Universidad Rafael Urdaneta (URU), Maracaibo, Venezuela</span>
            </div>
            <div className="experience-details">
              <p>Materias dictadas en la Facultad de Ingeniería:</p>
              <ul>
                <li>Matemática I</li>
                <li>Comunicación de Datos</li>
                <li>Circuitos Eléctricos I</li>
                <li>Diseño Lógico</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item">
            <h3>Pasantías profesionales</h3>
            <div className="experience-meta">
              <span className="experience-date">Dic 2023 – Ene 2024</span>
              <span className="experience-company">Corporación Matrix TV C.A, Maracaibo, Venezuela</span>
            </div>
            <div className="experience-details">
              <p>• Diseño y documentación de formatos para gestión de medicina ocupacional.</p>
              <p>• Procesamiento y gestión de documentos administrativos.</p>
              <p>• Sistematización y modificación de estructuras organizativas.</p>
            </div>
          </div>
          
          <div className="experience-item">
            <h3>Analista de sistemas</h3>
            <div className="experience-meta">
              <span className="experience-date">Abr 2021 – Feb 2023</span>
              <span className="experience-company">Grupo Yenny C.A, Maracaibo, Venezuela</span>
            </div>
            <div className="experience-details">
              <p>• Identificación y análisis de problemas en los sistemas actuales.</p>
              <p>• Diseño y documentación de nuevos sistemas y/o modificación en sistemas existentes.</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2 className="section-title">Habilidades Técnicas</h2>
          
          <div className="skills-section">
            <div className="skills-category">
              <h3>Software y Herramientas</h3>
              <div className="skills-list">
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Cisco Packet Tracer</span>
                <span className="skill-tag">Proteus Design Suite</span>
                <span className="skill-tag">Visual Studio Code</span>
                <span className="skill-tag">Git & GitHub</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Certificaciones</h3>
              <div className="certifications-list">
                <p>• CCNAv7: Introduction to Networks (Sep 2022)</p>
                <p>• CCNAv7: Switching, Routing and Wireless Essentials (Jun 2024)</p>
                <p>• CCNAv7: Enterprise, Networking, Security and Automation (Sep 2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;