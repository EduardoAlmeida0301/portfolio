import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb } from "lucide-react";
import { personalInfo, hardSkills, softSkills, quickFacts } from "@/data/siteConfig";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-32 relative">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            About Me
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Who <span className="text-gradient">I am</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Image & Bio */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Image */}
            <div className="relative aspect-square max-w-[280px] md:max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5" />
              <div className="absolute inset-4 rounded-xl glass border-primary/20 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Photo of Eduardo Almeida"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 border-2 border-primary/50 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 md:w-32 h-20 md:h-32 border-2 border-primary/30 rounded-xl" />
            </div>

            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 md:p-6 rounded-2xl glass border-2 border-primary/20 hover:border-primary/40 transition-colors"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  📝
                </span>
                My Story
              </h4>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Hard Skills */}
            <div className="p-4 md:p-6 rounded-2xl glass border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="w-4 h-4" />
                </span>
                Hard Skills
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Technical proficiencies and tools I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-primary/10 text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/15 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-4 md:p-6 rounded-2xl glass border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb className="w-4 h-4" />
                </span>
                Soft Skills
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Interpersonal abilities that enhance collaboration
              </p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-secondary text-secondary-foreground border border-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick Facts - Dynamic grid */}
            {quickFacts.length > 0 && (
              <div className={`grid gap-4 ${quickFacts.length === 1 ? 'grid-cols-1' : quickFacts.length === 2 ? 'grid-cols-2' : quickFacts.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="p-3 md:p-4 rounded-xl glass border-2 border-primary/20 text-center"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-primary">{fact.value}</span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{fact.label}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
