import React from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/Projects/ProjectCard';
import '../styles/Common.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="page-title">Mis Proyectos</h1>
      <p className="page-subtitle">Una colección de mis trabajos más recientes y destacados</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;