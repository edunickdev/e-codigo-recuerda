import { useEffect, useState } from "react";
import { useProjects } from "../../stores/stores";
import { MotionDiv, fadeInUp, staggerContainer } from "../../config/motion";
import ImageComponents from "../components/projects/imagesComponent";
import { useInView } from "react-intersection-observer";
import { FiChevronDown, FiFolder } from "react-icons/fi";

const MyProjectsScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const projects = useProjects((state) => state.projects);
  const selectedProject = useProjects((state) => state.selectedProject);
  const setProject = useProjects((state) => state.selectProject);
  const fetchProjects = useProjects((state) => state.fetchProjects);

  const [isOpened, setIsOpened] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleMenu = () => setIsOpened(!isOpened);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-bg-light dark:bg-bg-dark">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            ref={refs.projects}
            className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4"
          >
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Soluciones end-to-end que muestran mi capacidad de llevar ideas a
            productos funcionales
          </p>
        </MotionDiv>

        {inView && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Project Selector - Mobile Dropdown */}
            <div className="lg:hidden relative">
              <button
                onClick={toggleMenu}
                className="w-full glass-card p-4 flex items-center justify-between text-text-primary dark:text-text-primary-dark"
              >
                <span className="flex items-center gap-3">
                  <FiFolder
                    size={20}
                    className="text-accent dark:text-accent-dark"
                  />
                  <span className="font-medium">
                    {selectedProject?.name || "Seleccionar proyecto"}
                  </span>
                </span>
                <FiChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${isOpened ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Dropdown Menu */}
              {isOpened && (
                <MotionDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 z-30 mt-2 glass-card overflow-hidden"
                >
                  {projects.map((project, index) => (
                    <button
                      key={project.id_project}
                      onClick={() => {
                        setProject(index);
                        setIsOpened(false);
                      }}
                      className={`w-full text-left px-4 py-3 transition-colors
                        ${
                          selectedProject?.id_project === project.id_project
                            ? "bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark"
                            : "text-text-primary dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                    >
                      {project.name}
                    </button>
                  ))}
                </MotionDiv>
              )}
            </div>

            {/* Project Selector - Desktop Sidebar */}
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:block lg:col-span-4"
            >
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <MotionDiv key={project.id_project} variants={fadeInUp}>
                    <button
                      onClick={() => setProject(index)}
                      className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300
                        ${
                          selectedProject?.id_project === project.id_project
                            ? "bg-accent dark:bg-accent-dark text-white shadow-lg glow"
                            : "glass-card text-text-primary dark:text-text-primary-dark hover:translate-x-2"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <FiFolder size={18} />
                        {project.name}
                      </div>
                    </button>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            {/* Project Content */}
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8"
            >
              <div className="glass-card p-4 md:p-6 rounded-2xl min-h-[500px]">
                <ImageComponents />
              </div>
            </MotionDiv>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjectsScreen;
