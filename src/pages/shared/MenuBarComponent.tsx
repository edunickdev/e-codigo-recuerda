import { Button } from "@nextui-org/react";
import { useProjects, useTheme } from "../../stores/stores";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { MotionDiv, MotionNav, AnimatePresence } from "../../config/motion";

const MenuBarComponent = ({
  onScroll,
}: {
  onScroll: (section: string) => void;
}) => {
  const path = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchProjects = useProjects((state) => state.fetchProjects);
  const { isDark, toggleTheme, initTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchProjects();
    initTheme();
  }, [fetchProjects, initTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "about", label: "Sobre mí" },
    { key: "studies", label: "Estudios" },
    { key: "projects", label: "Proyectos" },
    { key: "technologies", label: "Tecnologías" },
  ];

  if (path.pathname !== "/") return null;

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <MotionNav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-300
          ${
            isScrolled
              ? "bg-white/80 dark:bg-bg-dark/80 shadow-lg"
              : "bg-white/60 dark:bg-bg-dark/60"
          }
          backdrop-blur-xl border border-black/5 dark:border-white/10
        `}
      >
        <div className="flex items-center gap-6">
          {/* Logo */}
          <span className="font-bold text-lg text-accent dark:text-accent-dark whitespace-nowrap">
            ECR
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.key}
                variant="light"
                onPress={() => onScroll(item.key)}
                className="text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark 
                  transition-colors duration-200 font-medium text-sm px-4"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            className="text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark 
              transition-all duration-200 min-w-unit-8 w-8 h-8"
            aria-label={
              isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            }
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            isIconOnly
            variant="light"
            onPress={toggleMenu}
            className="md:hidden text-text-primary dark:text-text-primary-dark min-w-unit-8 w-8 h-8"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </Button>
        </div>
      </MotionNav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden
              bg-white/90 dark:bg-bg-dark/90 backdrop-blur-xl 
              rounded-2xl shadow-xl border border-black/5 dark:border-white/10
              p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <MotionDiv
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Button
                    variant="light"
                    onPress={() => {
                      onScroll(item.key);
                      toggleMenu();
                    }}
                    className="w-full justify-start text-text-primary dark:text-text-primary-dark 
                      hover:text-accent dark:hover:text-accent-dark font-medium text-base py-3"
                  >
                    {item.label}
                  </Button>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBarComponent;
