import React from 'react';
import { coursesData } from '../../data/coursesData';
import './CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="section-title">Cursos Dictados</h2>
      <p className="section-subtitle">
        Materias impartidas en la Facultad de Ingeniería de la Universidad Rafael Urdaneta
      </p>
      
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <span className="course-institution">Universidad Rafael Urdaneta</span>
              <span className="course-period">May 2024 - Presente</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;