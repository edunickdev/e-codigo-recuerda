import React, { useState, useEffect } from "react";
import {
  MotionImg,
  MotionDiv,
  MotionSection,
  fadeInUp,
  slideInRight,
  staggerContainer,
  AnimatePresence,
} from "../../../config/motion";
import { statics } from "../../../config/images";
import { TypeAnimation } from "react-type-animation";
import { useProjects } from "../../../stores/stores";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import {
  SiFlutter,
  SiPython,
  SiReact,
  SiGooglecloud,
  SiMicrosoftazure,
} from "react-icons/si";

const HeaderProfileComponent = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cv_link = useProjects((state) => state.cv_link);

  useEffect(() => {
    if (!hasAnimated) {
      const timerIn = setTimeout(() => setIsHovered(true), 2000);
      const timerOut = setTimeout(() => {
        setIsHovered(false);
        setHasAnimated(true);
      }, 4000);
      return () => {
        clearTimeout(timerIn);
        clearTimeout(timerOut);
      };
    }
  }, [hasAnimated]);

  const techIcons = [
    { Icon: SiFlutter, label: "Flutter" },
    { Icon: SiReact, label: "React" },
    { Icon: SiPython, label: "Python" },
    { Icon: SiGooglecloud, label: "GCP" },
    { Icon: SiMicrosoftazure, label: "Azure" },
  ];

  return (
    <section
      ref={refs.about}
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-bg-light dark:bg-bg-dark pt-24 pb-16"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent-secondary/20 dark:bg-accent-dark/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 dark:bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Greeting */}
            <MotionDiv variants={fadeInUp} className="mb-4">
              <span className="text-accent dark:text-accent-dark font-medium">
                Hola, soy
              </span>
            </MotionDiv>

            {/* Name */}
            <MotionDiv variants={fadeInUp} className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary dark:text-text-primary-dark">
                Eduard
                <span className="gradient-text"> Nicolás</span>
              </h1>
            </MotionDiv>

            {/* Title with typing effect */}
            <MotionDiv variants={fadeInUp} className="mb-6 h-16">
              <TypeAnimation
                wrapper="h2"
                className="text-xl md:text-2xl font-semibold text-text-secondary dark:text-text-secondary-dark"
                speed={70}
                cursor={true}
                sequence={[
                  "Ingeniero de Software",
                  2000,
                  "Arquitecto Cloud (GCP/Azure)",
                  2000,
                  "Especialista Mobile (Flutter)",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Automatización con IA",
                  2000,
                ]}
                repeat={Infinity}
              />
            </MotionDiv>

            {/* Description */}
            <MotionDiv variants={fadeInUp} className="mb-8">
              <p className="text-text-secondary dark:text-text-secondary-dark text-base md:text-lg leading-relaxed max-w-xl">
                +3 años diseñando y desarrollando productos end-to-end. Combino
                visión arquitectónica con ejecución técnica: desde apps móviles
                y web hasta backends con IA Generativa e integraciones cloud
                empresariales. Me especializo en crear soluciones robustas, no
                solo funcionales.
              </p>
            </MotionDiv>

            {/* CTA Buttons */}
            <MotionDiv
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="https://github.com/edunickdev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <FiGithub size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eduard-nicolas-sarmiento-herrera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>
              {cv_link && (
                <a
                  href={cv_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <FiDownload size={18} />
                  Descargar CV
                </a>
              )}
            </MotionDiv>

            {/* Tech Stack Pills */}
            <MotionDiv variants={fadeInUp} className="flex flex-wrap gap-3">
              {techIcons.map(({ Icon, label }, index) => (
                <div
                  key={label}
                  className="tech-badge"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={18} />
                  {label}
                </div>
              ))}
            </MotionDiv>
          </MotionDiv>

          {/* Right Side - Profile Visual */}
          <MotionSection
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Gradient border container */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-secondary to-accent-purple rounded-3xl blur-xl opacity-30 dark:opacity-40 animate-pulse" />

              {/* Profile image container */}
              <div className="relative glass-card p-2 rounded-3xl">
                <MotionImg
                  loading="eager"
                  src={statics.fotoPerfil}
                  alt="Eduard Nicolás Sarmiento Herrera"
                  className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>

              {/* Floating tech icons */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    <MotionImg
                      loading="eager"
                      src={statics.cloud}
                      className="absolute -top-6 -left-6 w-12 h-12 md:w-14 md:h-14"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <MotionImg
                      loading="eager"
                      src={statics.iphone}
                      className="absolute -top-4 -right-8 w-10 h-10 md:w-12 md:h-12"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <MotionImg
                      loading="eager"
                      src={statics.web}
                      className="absolute -bottom-4 -right-6 w-10 h-10 md:w-12 md:h-12"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                    <MotionImg
                      loading="eager"
                      src={statics.desktop}
                      className="absolute -bottom-6 -left-8 w-10 h-10 md:w-12 md:h-12"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Hover trigger for icons */}
              <div
                className="absolute inset-0 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
};

export default HeaderProfileComponent;
