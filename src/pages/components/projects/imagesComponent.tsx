import { Button, Image, Tooltip } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { useState, useEffect } from "react";
import { useProjects } from "../../../stores/stores";
import { MotionImg, MotionDiv, AnimatePresence } from "../../../config/motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

const ImageComponents = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "strength" | "learned">(
    "desc",
  );
  const project = useProjects(
    (state) => state.projects[state.selected_project],
  );

  const images = project && [project.main_image, ...project.other_images];

  const goToNextImage = () => {
    if (images) {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const goToPreviousImage = () => {
    if (images) {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    setCurrentImage(0);
    setShowDetails(false);
    setActiveTab("desc");
  }, [project]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full text-text-secondary dark:text-text-secondary-dark">
        Selecciona un proyecto para ver los detalles
      </div>
    );
  }

  const tabs = [
    { key: "desc", label: "Descripción", content: project.description },
    { key: "strength", label: "Fortalezas", content: project.strength },
    { key: "learned", label: "Aprendizajes", content: project.learned },
  ].filter((tab) => tab.content);

  return (
    <div className="flex flex-col h-full w-full gap-4">
      {/* Project Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
            {project.name}
          </h3>
          {images && images.length > 1 && (
            <span className="text-xs text-text-secondary dark:text-text-secondary-dark bg-bg-secondary dark:bg-bg-elevated px-2 py-1 rounded-full">
              {currentImage + 1} / {images.length}
            </span>
          )}
        </div>
        {project.deploy && project.deploy.includes("https") && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
          >
            <FiExternalLink size={16} />
            Visitar
          </a>
        )}
      </div>

      {/* Main Image Gallery */}
      <div className="relative flex-1 rounded-xl overflow-hidden bg-bg-secondary dark:bg-bg-elevated min-h-[300px]">
        {/* Current Image */}
        <AnimatePresence mode="wait">
          <MotionDiv
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={images && images[currentImage]}
              alt={`${project.name} - Imagen ${currentImage + 1}`}
              className="object-contain w-full h-full"
              removeWrapper
            />
          </MotionDiv>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images && images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <Button
                isIconOnly
                radius="full"
                size="sm"
                onPress={goToPreviousImage}
                className="ml-2 bg-white/90 dark:bg-bg-dark/90 text-text-primary dark:text-text-primary-dark shadow-lg hover:scale-105 transition-transform"
              >
                <FiChevronLeft size={20} />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <Button
                isIconOnly
                radius="full"
                size="sm"
                onPress={goToNextImage}
                className="mr-2 bg-white/90 dark:bg-bg-dark/90 text-text-primary dark:text-text-primary-dark shadow-lg hover:scale-105 transition-transform"
              >
                <FiChevronRight size={20} />
              </Button>
            </div>
          </>
        )}

        {/* Image Indicators */}
        {images && images.length > 1 && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 dark:bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-300
                  ${
                    index === currentImage
                      ? "bg-accent dark:bg-accent-dark w-6 h-2"
                      : "bg-white/60 dark:bg-white/40 w-2 h-2 hover:bg-white/80"
                  }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide-up Details Panel */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Toggle Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-center gap-2 py-2 
              bg-gradient-to-t from-white dark:from-bg-dark to-white/80 dark:to-bg-dark/80
              backdrop-blur-sm text-text-primary dark:text-text-primary-dark
              hover:from-bg-secondary dark:hover:from-bg-elevated transition-colors"
          >
            <span className="text-sm font-medium">
              {showDetails ? "Ocultar detalles" : "Ver detalles del proyecto"}
            </span>
            {showDetails ? (
              <FiChevronDown size={16} />
            ) : (
              <FiChevronUp size={16} />
            )}
          </button>

          {/* Expandable Details Panel */}
          <AnimatePresence>
            {showDetails && (
              <MotionDiv
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-white dark:bg-bg-dark border-t border-border-color"
              >
                <div className="p-4">
                  {/* Tab Buttons */}
                  <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() =>
                          setActiveTab(tab.key as typeof activeTab)
                        }
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all
                          ${
                            activeTab === tab.key
                              ? "bg-accent dark:bg-accent-dark text-white"
                              : "bg-bg-secondary dark:bg-bg-elevated text-text-secondary dark:text-text-secondary-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    <MotionDiv
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed max-h-32 overflow-y-auto"
                    >
                      {tabs.find((t) => t.key === activeTab)?.content}
                    </MotionDiv>
                  </AnimatePresence>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="mt-3 px-3 py-2 bg-accent/10 dark:bg-accent-dark/10 rounded-lg inline-block">
                      <span className="text-xs text-accent dark:text-accent-dark font-medium">
                        📌 {project.status}
                      </span>
                    </div>
                  )}
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project?.technologies.map((technology, index) => {
          const route = statics[technology as keyof typeof statics];
          return (
            <Tooltip
              key={index}
              content={technology}
              classNames={{
                content:
                  "bg-bg-card dark:bg-bg-dark text-text-primary dark:text-text-primary-dark font-medium",
              }}
            >
              <MotionImg
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                src={route}
                className="w-8 h-8 object-contain p-1 rounded-lg bg-bg-secondary dark:bg-bg-elevated 
                  hover:scale-110 transition-transform cursor-pointer"
                alt={technology}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default ImageComponents;
