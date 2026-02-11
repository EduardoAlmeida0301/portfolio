export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  userManualUrl?: string;
}

export const projects: Project[] = [
  {
  id: "eigenfaces-face-recognition",
  title: "Eigenfaces Face Recognition System",
  shortDescription:
    "Java-based facial recognition system implementing the Eigenfaces method using PCA for face reconstruction and identification.",
  fullDescription:
    "This project was developed as part of coursework in Informatics Engineering and achieved a final grade of 19/20. The system implements the Eigenfaces method using Principal Component Analysis (PCA) to perform facial reconstruction and face recognition. It follows the complete Eigenfaces pipeline, including mean face computation, construction of the difference matrix, covariance matrix calculation, eigenvalue and eigenvector extraction, eigenfaces generation, and dimensionality reduction. The application supports both command-line and interactive execution modes, processes image data represented as matrices in CSV format, and exports reconstructed faces and eigenfaces as JPEG images. This project demonstrates a strong application of linear algebra, numerical methods, and software engineering principles.",
  tags: [
    "Java",
    "CSV Processing",
    "Linear Algebra",
    "PCA",
    "Eigenfaces",
    "Face Recognition",
    "Apache Commons Math",
    "File I/O"
  ],
  image:
    "/Project 1 - SEM1_EigenFaces/eigenface.png",
  gallery: [
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 1.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 2.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 3.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 4.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 5.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 6.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 7.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 8.jpg",
    "/Project 1 - SEM1_EigenFaces/Project 1 - SEM1_EigenFaces - 9.jpg"
  ],
  features: [
    "Mean face computation and difference matrix construction",
    "Covariance matrix calculation and eigen decomposition",
    "Eigenfaces generation and normalization",
    "Dimensionality reduction using principal components",
    "Face reconstruction with configurable number of eigenfaces",
    "Face identification using Euclidean distance",
    "CSV import and export of image matrices",
    "Command-line and interactive execution modes"
  ],
  githubUrl: "https://github.com/EduardoAlmeida0301/LAPR1-Final-Project",
  liveUrl: null
},
  {
  id: "Sem2-Integrative-Project",
  title: "Railway Network Simulation System",
  shortDescription:
    "Academic project focused on the simulation, analysis and management of railway networks.",
  fullDescription:
    "This project was developed as part of the Integrative Project of the 2nd semester of the 2024/2025 academic year. It brings together knowledge from Software Engineering, Laboratory/Project II, Computational Mathematics, Discrete Mathematics and Programming Paradigms. The work consisted of designing and implementing a Java application that simulates the operation of railway networks, allowing users to create maps with cities and industries, define scenarios, build stations and railway lines, manage trains and routes, and monitor the transport of cargo and passengers. The system includes a JavaFX graphical interface, simulation tools, statistical analysis using Python, algorithm design with worst-case complexity analysis, and UML-based system modelling. Recognised as a top three project of the academic year, with no ranking or distinction among the top three.",
  tags: [
    "Java",
    "JavaFX",
    "Python",
    "UML",
    "Algorithms",
    "Complexity Analysis",
    "Statistics",
    "SCRUM",
    "Object-Oriented Programming"
  ],
  image:
    "/Project 2 - SEM2PI/train_simulator.png",
  gallery: [
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 1 Main Menu.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 2 Simulation.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 3 Show Map.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 4 Add Station.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 5 Buy Locomotive.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 6 Create Route.jpg",
    "/Project 2 - SEM2PI/Project 2 - SEM2PI - 7 Financial Results.jpg"
  ],
  features: [
    "Map and scenario editor with cities, industries and historical constraints",
    "Railway network simulation with stations, trains, routes and cargo transport",
    "Demand and supply modelling for passengers and goods",
    "Railway connectivity analysis with shortest-path and maintenance route algorithms",
    "Algorithm design with worst-case time complexity analysis",
    "Statistical analysis and data visualisation using Python",
    "System design and documentation using UML diagrams",
    "Iterative and incremental development following SCRUM methodology"
  ],
  userManualUrl: "/Project 2 - SEM2PI/User_Manual.pdf",
  githubUrl: "https://github.com/EduardoAlmeida0301/Sem2-Integrative-Project",
  liveUrl: null
},
  {
  id: "logistics-on-rails",
  title: "Logistics On Rails",
  shortDescription:
    "Software application for managing warehouse operations and freight logistics within railway systems.",
  fullDescription:
    "This project was developed as part of the Integrative Project of the 3rd semester of the 2025/2026 academic year and focuses on the design and implementation of a software application for the management of warehouse operations and freight logistics within railway systems. The system supports the modelling and coordination of warehouses, railway infrastructure, stations, routes, and cargo movements, addressing real-world operational constraints associated with railway-based logistics. The solution integrates multiple technical components, combining high-level application logic with relational database management and low-level system modules. Core functionalities include warehouse inventory control, freight handling, coordination between warehouses and railway networks, route planning, and the monitoring of operational and environmental conditions. The project was developed following an iterative and incremental SCRUM-based approach, with a strong emphasis on modular design, data consistency, and system reliability. Recognised as a top three project of the academic year, with no ranking or distinction among the top three.",
  tags: [
    "Java",
    "C",
    "Assembly (RISC-V)",
    "PL/SQL",
    "JavaFX",
    "Oracle Database",
    "Data Structures",
    "Algorithms",
    "SCRUM",
    "Railway Systems",
    "Warehouse Management"
  ],
  image: "/Project 3 - SEM3P1/logistics_on_rails.png",
  gallery: [
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 1.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 2.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 3.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 4.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 5.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 6.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 7.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 8.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 9.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 10.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 11.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 12.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 13.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 14.jpg",
    "/Project 3 - SEM3P1/Project 3 - SEM3P1 - 15.jpg",
  ],
  features: [
    "Warehouse management with inventory control and cargo handling",
    "Modelling of railway infrastructure including stations, tracks, and routes",
    "Coordination of freight logistics between warehouses and railway networks",
    "Route planning and optimisation for railway freight transport",
    "Support for FIFO and FEFO inventory management strategies",
    "Environmental monitoring of goods using sensor data",
    "Relational database design with advanced PL/SQL queries",
    "Graph-based algorithms for logistics and network optimisation"
  ],
  userManualUrl: "/Project 3 - SEM3P1/User_Manual.pdf",
  githubUrl: "https://github.com/EduardoAlmeida0301/Sem3-Integrative-Project",
  liveUrl: null
},
  {
  id: "portfolio-website",
  title: "Personal Portfolio Website",
  shortDescription: "Interactive portfolio website presenting academic background, professional experience, and technical projects.",
  fullDescription:
    "This portfolio website was developed to present my academic background, professional experience, and technical projects in a structured and accessible manner. The application is organised into dedicated sections for projects, skills, and an academic and professional timeline, allowing visitors to quickly understand my profile and experience. The project focuses on maintainability, scalability, and a smooth user experience across different devices.",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Component-Based Architecture",
    "Responsive Web Design",
    "Frontend Development",
  ],
  image: "/Project 4 - Personal Portfolio Website/personal_portfolio.png",
  gallery: [
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 1.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 2.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 3.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 4.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 5.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 6.jpg",
    "/Project 4 - Personal Portfolio Website/Project 4 - Personal Portfolio Website - 7.jpg",
  ],
  features: [
    "Academic and professional timeline section",
    "Dedicated project showcase with detailed project pages",
    "Responsive layout adapted to different screen sizes",
    "Light and dark theme support",
    "Reusable and modular React components",
    "Client-side routing for seamless navigation",
    "Structured data-driven content management",
    "Optimised build process using Vite",
  ],
  liveUrl: "https://eduardoalmeida-portfolio.vercel.app/",
  githubUrl: "https://github.com/EduardoAlmeida0301/portfolio"
}
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
