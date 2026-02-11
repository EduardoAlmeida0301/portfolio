import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Code, Lightbulb, Star, ChevronDown, ChevronUp, X } from "lucide-react";
import { timelineItems, type TimelineItem as TimelineItemType } from "@/data/siteConfig";

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
  activity: Calendar,
};

const typeLabels = {
  work: "Work Experience",
  education: "Education",
  achievement: "Achievement",
  activity: "Activity",
};

interface TimelinePopupProps {
  item: TimelineItemType;
  isLeft: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TimelinePopup = ({ item, isLeft, onClose, onMouseEnter, onMouseLeave }: TimelinePopupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const popup = item.popup;

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!popup) return null;

  const hasMoreContent = (popup.softSkills && popup.softSkills.length > 0) || 
                         (popup.highlights && popup.highlights.length > 0);

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`absolute z-[9999] w-80 max-w-[calc(100vw-2rem)] rounded-xl bg-popover border-2 border-primary/30 shadow-2xl overflow-hidden
        top-full mt-2
        left-0 right-0 mx-auto
        md:mx-0 md:top-0 md:mt-0
        ${isLeft 
          ? "md:right-0 md:left-auto" 
          : "md:left-0 md:right-auto"
        }
      `}
      style={{ 
        boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header with close button */}
      <div className="flex items-center justify-between p-3 border-b border-border/50 bg-primary/5">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {typeLabels[item.type]}
        </span>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
        </button>
      </div>

      {/* Content - max height with optional expand */}
      <div className={`overflow-y-auto transition-all duration-300 ${isExpanded ? "max-h-80" : "max-h-56"}`}>
        <div className="p-3 space-y-3">
          {/* Image if available */}
          {popup.image && (
            <div className="rounded-lg overflow-hidden border border-border/50">
              <img 
                src={popup.image} 
                alt={item.title} 
                className="w-full h-24 object-cover"
              />
            </div>
          )}

          {/* Date and Location */}
          <div className="flex flex-wrap gap-2 text-xs">
            {popup.startDate && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3 h-3 text-primary" />
                <span>{popup.startDate} — {popup.endDate || "Present"}</span>
              </div>
            )}
            {popup.location && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3 text-primary" />
                <span>{popup.location}</span>
              </div>
            )}
          </div>

          {/* Summary text */}
          {popup.summary && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {popup.summary}
            </p>
          )}

          {/* Hard Skills */}
          {popup.hardSkills && popup.hardSkills.length > 0 && (
            <div>
              <div className="flex items-center gap-1 mb-1.5">
                <Code className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-foreground">Hard Skills</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {popup.hardSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-1.5 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Soft Skills */}
                {popup.softSkills && popup.softSkills.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1 mb-1.5">
                      <Lightbulb className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Soft Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {popup.softSkills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-1.5 py-0.5 text-[10px] rounded-full bg-secondary text-secondary-foreground border border-primary/15"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {popup.highlights && popup.highlights.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1 mb-1.5">
                      <Star className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Highlights</span>
                    </div>
                    <ul className="space-y-1">
                      {popup.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Expand/Collapse button */}
      {hasMoreContent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-1 py-2 border-t border-border/50 bg-secondary/50 hover:bg-secondary transition-colors text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-3 h-3" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" />
              Show More
            </>
          )}
        </button>
      )}
    </motion.div>
  );
};

const HOVER_DELAY = 600; // milliseconds before popup opens
const CLOSE_DELAY = 2000; // milliseconds before popup closes after mouse leaves

const TimelineItem = ({ 
  item, 
  index, 
  isLeft,
  activePopupId,
  setActivePopupId
}: { 
  item: TimelineItemType; 
  index: number;
  isLeft: boolean;
  activePopupId: string | null;
  setActivePopupId: (id: string | null) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const Icon = iconMap[item.type];
  
  const itemId = `${item.year}-${item.title}`;
  const showPopup = activePopupId === itemId;

  const clearAllTimeouts = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!item.popup) return;
    setIsHovering(true);
    clearAllTimeouts();
    
    if (!showPopup) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActivePopupId(itemId);
      }, HOVER_DELAY);
    }
  }, [item.popup, showPopup, itemId, setActivePopupId, clearAllTimeouts]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    clearAllTimeouts();
    
    if (showPopup) {
      closeTimeoutRef.current = setTimeout(() => {
        setActivePopupId(null);
      }, CLOSE_DELAY);
    }
  }, [showPopup, setActivePopupId, clearAllTimeouts]);

  const handlePopupMouseEnter = useCallback(() => {
    clearAllTimeouts();
  }, [clearAllTimeouts]);

  const handlePopupMouseLeave = useCallback(() => {
    clearAllTimeouts();
    closeTimeoutRef.current = setTimeout(() => {
      setActivePopupId(null);
    }, CLOSE_DELAY);
  }, [setActivePopupId, clearAllTimeouts]);

  const handleClosePopup = useCallback(() => {
    clearAllTimeouts();
    setActivePopupId(null);
  }, [setActivePopupId, clearAllTimeouts]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
        <div 
          className={`relative p-4 md:p-6 rounded-2xl glass border-2 transition-all duration-300 cursor-pointer ${
            isLeft ? "md:ml-auto" : ""
          } max-w-lg ${
            showPopup || isHovering 
              ? "border-primary/50 shadow-lg" 
              : "border-primary/20 hover:border-primary/40"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ zIndex: showPopup ? 9999 : 'auto' }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
            {item.year}
          </span>
          <h4 className={`text-base md:text-lg font-bold mb-1 transition-colors ${
            showPopup || isHovering ? "text-primary" : ""
          }`}>
            {item.title}
          </h4>
          <p className="text-primary/80 text-sm font-medium mb-2">
            {item.company}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Hover hint */}
          {item.popup && !showPopup && (
            <div className={`mt-3 text-xs text-primary/60 transition-opacity duration-200 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}>
              Hold to see details...
            </div>
          )}

          {/* Popup */}
          <AnimatePresence>
            {showPopup && item.popup && (
              <TimelinePopup 
                item={item} 
                isLeft={isLeft} 
                onClose={handleClosePopup}
                onMouseEnter={handlePopupMouseEnter}
                onMouseLeave={handlePopupMouseLeave}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Icon */}
      <div className="hidden md:flex relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <Icon className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const TimelineSection = () => {
  const [activePopupId, setActivePopupId] = useState<string | null>(null);
  
  if (timelineItems.length === 0) return null;

  return (
    <section id="journey" className="py-16 md:py-32 relative overflow-visible">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Journey
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            My <span className="text-gradient">career path</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto overflow-visible">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={`${item.year}-${item.title}`} 
                item={item} 
                index={index}
                isLeft={index % 2 === 0}
                activePopupId={activePopupId}
                setActivePopupId={setActivePopupId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
