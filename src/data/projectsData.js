export const projects = [
  {
    id: 1,
    title: "Aplicación Web de Blog de Recetas",
    shortDescription: "Una plataforma interactiva para compartir y descubrir recetas culinarias.",
    mainImage: "/images/P1_img0.png",
    images: ["/images/P1_img0.png", "/images/P1_img1.png", "/images/P1_img2.png"],
    videos: ["/videos/blog-recetas-demo.mp4"],
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    duration: "3 semanas",
    collaborators: ["Desarrollador Principal"],
    status: "Completado",
    repository: "https://github.com/gabrp2908/Frameworks_Proyecto1",
    detailedDescription: "Esta aplicación web permite realizar un CRUD completo (Crear, Ver, Editar, Borrar) de recetas. Las recetas están implementadas como componentes reutilizables y adaptables. El proyecto incluye varias versiones de visualización.",
    keyFeatures: [
      "Crear nuevas recetas con título, ingredientes, pasos, imagen y etiquetas.",
      "Leer/Ver recetas en detalle.",
      "Editar recetas existentes usando un formulario.",
      "Borrar recetas.",
      "Varias opciones de visualización: Carrusel, Circular, Cuadricula, Pills."
    ]
  },
  {
    id: 2,
    title: "Trivia Web",
    shortDescription: "Juego de preguntas y respuestas interactivo en la web.",
    mainImage: "/images/P2_img0.png",
    images: ["/images/P2_img0.png", "/images/P2_img1.png", "/images/P2_img2.png", "/images/P2_img3.png", "/images/P2_img4.png"],
    videos: ["/videos/trivia-demo.mp4"],
    technologies: ["JavaScript", "HTML", "CSS"],
    duration: "1 mes",
    collaborators: ["Desarrollador Principal"],
    status: "Completado",
    repository: "https://github.com/gabrp2908/CliWeb_Proyecto2",
    detailedDescription: "Un juego de trivia desarrollado con JavaScript que ofrece preguntas de diferentes categorías con un temporizador y puntuación.",
    keyFeatures: [
      "Múltiples categorías de preguntas",
      "Sistema de puntuación en tiempo real",
      "Interfaz intuitiva y atractiva",
      "Resumen de desempeño"
    ]
  },
  {
    id: 3,
    title: "Aplicación de Finanzas Personales",
    shortDescription: "Herramienta para gestionar ingresos, gastos y presupuestos personales.",
    mainImage: "/images/P3_img0.png",
    images: ["/images/P3_img0.png", "/images/P3_img1.png", "/images/P3_img2.png", "/images/P3_img3.png"],
    videos: ["/videos/finanzas-demo.mp4"],
    technologies: ["JavaScript", "IndexedDB", "HTML", "CSS"],
    duration: "1 mes",
    collaborators: ["Erick Díaz"],
    status: "Completado",
    repository: "https://github.com/gabrp2908/CliWeb_Proyecto3",
    detailedDescription: "Aplicación web que utiliza IndexedDB para almacenar datos localmente, permitiendo a los usuarios rastrear sus finanzas sin necesidad de servidor.",
    keyFeatures: [
      "Registro de ingresos y gastos",
      "Generación de reportes gráficos",
      "Categorización automática",
      "Sincronización offline"
    ]
  },
  {
    id: 4,
    title: "Aplicación de Visualización del Tiempo",
    shortDescription: "Dashboard meteorológico con pronósticos y visualizaciones.",
    mainImage: "/images/P4_img0.png",
    images: ["/images/P4_img0.png", "/images/P4_img1.png", "/images/P4_img2.png", "/images/P4_img3.png", "/images/P4_img4.png", "/images/P4_img5.png", "/images/P4_img6.png", "/images/P4_img7.png", "/images/P4_img8.png", "/images/P4_img9.png"],
    videos: ["/videos/tiempo-demo.mp4"],
    technologies: ["Angular", "TypeScript", "CSS", "HTML"],
    duration: "3 semanas",
    collaborators: ["Desarrollador Principal"],
    status: "Completado",
    repository: "https://github.com/gabrp2908/Frameworks_Proyecto2",
    detailedDescription: "Aplicación desarrollada en Angular que consume APIs meteorológicas para mostrar pronósticos detallados con gráficos interactivos.",
    keyFeatures: [
      "Pronósticos a 7 días",
      "Visualizaciones de temperatura y precipitaciones",
      "Búsqueda por ubicación",
      "Interfaz adaptativa"
    ]
  },
  {
    id: 5,
    title: "Calculadora de Matrices",
    shortDescription: "Herramienta matemática para operaciones con matrices.",
    mainImage: "/images/P5_img0.png",
    images: ["/images/P5_img0.png",  "/images/P5_img1.png"],
    videos: ["/videos/matrices-demo.mp4"],
    technologies: ["JavaScript", "HTML", "CSS", "Math.js"],
    duration: "1 mes",
    collaborators: ["Desarrollador Principal"],
    status: "Completado",
    repository: "https://github.com/usuario/calculadora-matrices",
    detailedDescription: "Calculadora web que permite realizar operaciones matemáticas con matrices como suma, multiplicación, determinante, etc.",
    keyFeatures: [
      "Operaciones básicas y avanzadas",
      "Interfaz intuitiva para entrada de matrices",
      "Cálculos en tiempo real",
      "Soporte para matrices de diferentes tamaños"
    ]
  },
  {
    id: 6,
    title: "Diseño de una Red IIoT para la Detección Vehicular",
    shortDescription: "Sistema de monitoreo de tráfico utilizando tecnologías IIoT.",
    mainImage: "/images/P6_img0.png",
    images: ["images/P6_img0.png", "images/P6_img1.png", "images/P6_img2.png"],
    videos: ["/videos/iiot-demo.mp4"],
    technologies: ["IoT", "Sensores", "Redes", "Análisis de Datos"],
    duration: "7 meses",
    collaborators: ["Erick Díaz"],
    status: "Completado",
    repository: "https://github.com/usuario/red-iiot-trafico",
    detailedDescription: "Trabajo especial de grado que diseña e implementa una red IIoT para recopilar y analizar datos de tráfico vehicular en tiempo real.",
    keyFeatures: [
      "Sensores de detección vehicular",
      "Análisis de datos en la nube",
      "Dashboard de monitoreo",
      "Optimización de flujos de tráfico"
    ]
  }
];

export const featuredProjects = projects;