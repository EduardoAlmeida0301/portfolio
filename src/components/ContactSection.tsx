import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { socialLinks } from "@/data/siteConfig";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  cv: FileText,
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">touch</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Highly committed and motivated, always focused on embracing new experiences and challenges that foster continuous learning and personal growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {socialLinks.map(({ platform, url, label }, index) => {
            const Icon = iconMap[platform];

            const isEmail = platform === "email";
            const isCV = platform === "cv";

            const username =
              platform === "github"
                ? "@EduardoAlmeida0301"
                : platform === "linkedin"
                ? "@eduardo-almeida-932447318"
                : platform === "email"
                ? url.replace("mailto:", "")
                : "View CV";

            return (
              <motion.a
                key={platform}
                href={url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>

                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {label}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {platform === "email" ? (
                   <>
                    <span className="whitespace-nowrap">
                      {url.replace("mailto:", "").split("@")[0]}
                   </span>
                  <wbr />@
                 <wbr />
                <span className="whitespace-nowrap">
                   {url.replace("mailto:", "").split("@")[1]}
                </span>
               </>
           ) : (
              username
          )}
        </p>







              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
