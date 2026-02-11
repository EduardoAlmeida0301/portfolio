import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}

const ProjectCard = ({
  id,
  title,
  description,
  tags,
  image,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
    >
      <Link to={`/project/${id}`} className="block h-full group">
        <article className="h-full rounded-2xl overflow-hidden glass border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl flex flex-col">
          {/* Image container - fixed aspect ratio */}
          <div className="relative aspect-video overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
            
            {/* Hover indicator */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </motion.div>
          </div>

          {/* Content container - flex grow to fill remaining space */}
          <div className="p-4 md:p-6 flex flex-col flex-grow">
            <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
            
            {/* Description with fixed height */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
              {description}
            </p>

            {/* Tags - always at bottom */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 md:px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2 md:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
