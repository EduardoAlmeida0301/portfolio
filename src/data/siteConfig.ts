// ===== SITE CONFIGURATION =====
// Edit this file to update your portfolio content without touching component code

export interface HardSkill {
  name: string;
}

export interface SoftSkill {
  name: string;
}

export interface QuickFact {
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "achievement" | "activity";
  // Optional detailed info for the popup
  popup?: {
    startDate?: string;       // e.g., "Jan 2024"
    endDate?: string;         // e.g., "Present" or "Dec 2024"
    location?: string;        // e.g., "Lisbon, Portugal"
    summary?: string;         // Longer descriptive text about this experience
    hardSkills?: string[];    // Technical skills used
    softSkills?: string[];    // Soft skills developed
    highlights?: string[];    // Key achievements/highlights
    image?: string;           // Optional image URL
  };
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "cv";
  url: string;
  label: string;
}

// ===== PERSONAL INFO =====
export const personalInfo = {
  name: "Eduardo Almeida",
  initials: "EA",
  title: "Informatics Engineering Student",
  subtitle: "Building solid foundations in software engineering",
  bio: [
    "I am a 2nd year student of the Bachelor's Degree in Computer Engineering at ISEP, with a strong passion for programming and mathematics. From an early age, I have been fascinated by how computer engineering allows creativity, logic, and problem solving to come together, giving me the freedom to explore innovative solutions and achieve concrete results.",
    "In high school, I completed the Science and Technology course with a final grade point average of 18/20. I was awarded a scholarship from the Gulbenkian Foundation, which recognises academic merit and provides additional motivation to always do my best.",
    "I am a determined, focused person who enjoys facing challenges and always gives my all in everything I do. I am a quick learner, enjoy researching, and am proactive in finding solutions. I deeply value teamwork — I enjoy collaborating with my colleagues, sharing ideas, and contributing to our common success.",
    "I see computer engineering as an area where I can grow personally and professionally, and where every challenge is an opportunity to evolve.",
    "I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
};

// ===== HARD SKILLS =====
// Add or remove skills as needed - the layout will adjust automatically
export const hardSkills: HardSkill[] = [
  { name: "Java" },
  { name: "C" },
  { name: "Python" },
  { name: "SQL" },
  { name: "PL/SQL" },
  { name: "RISC-V" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Object-Oriented Programming (OOP)" },
  { name: "Debugging" },
  { name: "Git" },
  { name: "GitHub" }
];

// ===== SOFT SKILLS =====
// Add or remove skills as needed - the layout will adjust automatically
export const softSkills: SoftSkill[] = [
  { name: "Problem Solving" },
  { name: "Critical Thinking" },
  { name: "Clear Communication" },
  { name: "Teamwork & Collaboration" },
  { name: "Commitment" },
  { name: "Continuous Learning" },
  { name: "Attention to Detail" },
  { name: "Adaptability" },
  { name: "Project Management" },
  { name: "Leadership" },
];

// ===== QUICK FACTS =====
// Add or remove facts as needed - the grid will adjust automatically
export const quickFacts: QuickFact[] = [
  { value: "5", label: "Personal Projects" },
  { value: "2nd", label: "Year Student" },
];

// ===== TIMELINE / JOURNEY =====
// Add or remove items as needed - the timeline will adjust automatically
// Types: "work", "education", "achievement", "activity"
export const timelineItems: TimelineItem[] = [
  {
  year: "2025",
  title: "Ambassador",
  company: "CGI",
  description:
    "Student ambassador representing CGI within the academic environment.",
  type: "work",
  popup: {
    startDate: "Dec 2025",
    endDate: "Present",
    summary:
      "Selected as a CGI Ambassador to represent the company within the academic environment. Responsibilities include promoting company initiatives, participating in outreach activities, and acting as a point of contact between students and CGI representatives.",
    softSkills: [
      "Communication",
      "Networking",
      "Professional Representation",
      "Responsibility",
    ],
    highlights: [
      "Represented CGI in academic and outreach initiatives",
    ],
  },
},
  {
    year: "2025",
    title: "Member – Informatics Students’ Group (NEI)",
    company: "ISEP – Instituto Superior de Engenharia do Porto",
    description:
      "Active member of the Informatics students’ organisation, supporting academic and technical initiatives.",
    type: "activity",
    popup: {
      startDate: "Oct 2025",
      endDate: "Present",
      location: "Porto, Portugal",
      summary:
        "Active member of the Informatics Students’ Group (NEI), the official student organisation representing Informatics Engineering students at ISEP. Contributed to academic, technical and student-led initiatives, collaborating with peers to support the student community.",
      softSkills: [
        "Teamwork",
        "Communication",
        "Responsibility",
        "Collaboration",
      ],
      highlights: [
        "Participation in student-led academic and technical initiatives",
      ],
    },
  },
  {
    year: "2025",
    title: "Gulbenkian Scholars’ Meeting",
    company: "Fundação Calouste Gulbenkian",
    description:
      "Academic and cultural exchange event for high-achieving students.",
    type: "achievement",
    popup: {
      startDate: "Feb 2025",
      endDate: "Feb 2025",
      location: "Lisboa, Portugal",
      summary:
        "Invited to participate in the Gulbenkian Scholars’ Meeting due to an excellence-level university admission score. Took part in academic discussions, cultural activities and networking with students from different academic backgrounds.",
      softSkills: [
        "Networking",
        "Cultural Awareness",
        "Communication",
      ],
      highlights: [
        "Invited due to an admission score of 187.30",
      ],
    },
  },
  {
    year: "2024",
    title: "Academic Coursework – Informatics Engineering",
    company: "ISEP – Instituto Superior de Engenharia do Porto",
    description:
      "Development of academic software systems using object-oriented and systems-level programming.",
    type: "education",
    popup: {
      startDate: "2024",
      endDate: "Present",
      location: "Porto, Portugal",
      summary:
        "Relevant academic experience involving the development of Java applications using object-oriented programming, implementation of algorithms and data structures, systems programming in C and RISC-V Assembly, and software architecture design using UML modelling tools.",
      hardSkills: [
        "Java",
        "JavaFX",
        "C",
        "RISC-V Assembly",
        "Algorithms",
        "Software Architecture",
        "Version Control (Git)",
      ],
      softSkills: [
        "Communication",
        "Collaboration",
        "Organisation",
      ],
      highlights: [
        "Team-based academic projects",
        "Applied UML modelling with Visual Paradigm",
      ],
    },
  },
  {
    year: "2024",
    title: "BSc in Informatics Engineering",
    company: "ISEP – Instituto Superior de Engenharia do Porto",
    description:
      "Undergraduate degree focused on software engineering, algorithms, data structures and systems programming.",
    type: "education",
    popup: {
      startDate: "Sep 2024",
      endDate: "Present",
      location: "Porto, Portugal",
      summary:
        "Currently attending a Bachelor's degree in Informatics Engineering, with a strong focus on software development, algorithms, data structures, databases and systems programming. Coursework includes both individual and team-based academic work, with an emphasis on problem solving and software design.",
      hardSkills: [
        "Java",
        "C",
        "Python",
        "SQL",
        "RISC-V Assembly",
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "UML",
      ],
      softSkills: [
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Analytical Thinking",
      ],
      highlights: [
        "Current average grade: 17.75/20",
      ],
    },
  },
  {
    year: "2022",
    title: "Futsal Referee",
    company: "Associação de Futebol de Aveiro (AFA)",
    description:
      "Certified futsal referee officiating official competitive matches.",
    type: "activity",
    popup: {
      startDate: "Nov 2022",
      endDate: "Present",
      location: "Aveiro, Portugal",
      summary:
        "Certified futsal referee responsible for officiating official matches, enforcing regulations, managing competitive environments and making decisions under pressure.",
      softSkills: [
        "Decision Making",
        "Stress Management",
        "Discipline",
        "Leadership",
      ],
      highlights: [
        "Officiating official regional competitions",
      ],
    },
  },
  {
    year: "2021",
    title: "Science and Technology Course",
    company: "Escola Secundária Dr. Serafim Leite",
    description:
      "Upper secondary education with a strong focus on mathematics and sciences.",
    type: "education",
    popup: {
      startDate: "Sep 2021",
      endDate: "Aug 2024",
      location: "São João da Madeira, Portugal",
      summary:
        "Completed upper secondary education in the Science and Technology track, with a strong emphasis on mathematics, physics and analytical problem solving.",
      softSkills: [
        "Analytical Thinking",
        "Discipline",
        "Work Ethic",
      ],
      highlights: [
        "Final grade: 18/20",
      ],
    },
  },
];

// ===== SOCIAL LINKS =====
export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/EduardoAlmeida0301",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/eduardo-almeida-932447318/",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:eduardoafalmeida@gmail.com",
    label: "Email",
  },
  {
    platform: "cv",
    url: "/cv.pdf",
    label: "CV",
  },
];

// ===== NAV ITEMS =====
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
