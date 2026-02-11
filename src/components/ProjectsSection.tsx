import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-16 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Portfolio
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Featured <span className="text-gradient">projects</span>
          </h3>
        </motion.div>

        {/* Dynamic grid - adjusts based on number of projects */}
        <div className={`grid gap-4 md:gap-8 ${
          projects.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : projects.length === 2 
              ? 'grid-cols-1 sm:grid-cols-2' 
              : projects.length === 3 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2'
        }`}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              tags={project.tags}
              image={project.image}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
