import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navItems, personalInfo } from "@/data/siteConfig";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're not on the home page, navigate there first with the hash
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b-2 border-primary/20 py-3 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <nav className="container px-4 md:px-6 flex items-center justify-between">
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="text-xl md:text-2xl font-bold font-display"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.initials}<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass border-t-2 border-primary/20"
      >
        <ul className="container px-4 py-4 space-y-2">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-center"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
