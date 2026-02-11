import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Check, X } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => {
      const next = z + (e.deltaY < 0 ? 0.1 : -0.1);
      const clamped = Math.min(Math.max(next, 1), 3);
      if (clamped === 1) setPosition({ x: 0, y: 0 });
      return clamped;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  const stopDragging = () => setDragging(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="mb-12">
            <div className="relative w-full h-[60vh] max-h-[650px] rounded-2xl border border-primary/20 bg-background flex items-center justify-center p-2">
              <img
                src={project.gallery[selectedImage]}
                alt="Project screenshot"
                onClick={() => {
                  setZoom(1);
                  setIsLightboxOpen(true);
                }}
                className="w-full h-full object-contain rounded-lg shadow-2xl cursor-zoom-in"
              />
            </div>

            <div className="flex gap-4 mt-4 overflow-x-auto">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-32 h-20 rounded-lg border-2 flex items-center justify-center ${
                    selectedImage === i
                      ? "border-primary"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-xl glass border-primary/15"
                    >
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl glass border-primary/15">
                <h3 className="font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl glass border-primary/15 space-y-3">
                {project.userManualUrl && (
                  <a
                      href={project.userManualUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                      View User Manual
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5" />
                      Live Demo
                  </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary border"
                  >
                    <Github className="w-5 h-5" />
                      View Repository
                  </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={closeLightbox}
            >
              <X className="w-7 h-7" />
            </button>

            <div
              className="flex items-center justify-center cursor-grab"
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
            >
              <img
                src={project.gallery[selectedImage]}
                alt="Zoomed view"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                }}
                className="object-contain select-none transition-transform duration-150"
                draggable={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
