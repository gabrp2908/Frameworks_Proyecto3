export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Medicina Ocupacional",
    year: "2023",
    duration: "2 meses",
    description: "Diseño y documentación de formatos para gestión de medicina ocupacional en Corporación Matrix TV.",
    collaborators: "Equipo de desarrollo interno",
    technologies: ["Microsoft Office", "Gestión Documental", "Procesos Organizativos"],
    images: ["/project1/img1.jpg", "/project1/img2.jpg"],
    features: ["Diseño de formatos", "Documentación de procesos", "Sistematización de estructuras"],
    repository: "https://github.com/gabriela/project1"
  },
  {
    id: 2,
    title: "Análisis y Optimización de Sistemas",
    year: "2021-2023",
    duration: "23 meses",
    description: "Identificación y análisis de problemas en sistemas existentes y diseño de mejoras.",
    collaborators: "Equipo de Grupo Yenny C.A",
    technologies: ["Análisis de Sistemas", "Documentación", "Optimización"],
    images: ["/project2/img1.jpg"],
    features: ["Análisis de problemas", "Diseño de soluciones", "Documentación técnica"],
    repository: "https://github.com/gabriela/project2"
  },
  {
    id: 3,
    title: "Redes y Comunicaciones CCNA",
    year: "2024",
    duration: "En curso",
    description: "Implementación de redes y sistemas de comunicación basados en certificaciones CCNA.",
    collaborators: "Individual",
    technologies: ["Cisco Packet Tracer", "Redes", "Routing", "Switching"],
    images: ["/project3/img1.jpg"],
    features: ["Diseño de redes", "Configuración de equipos", "Seguridad de red"],
    repository: "https://github.com/gabriela/project3"
  }
];

export const featuredProjects = projects.slice(0, 3);