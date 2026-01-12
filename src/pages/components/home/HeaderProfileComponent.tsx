import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { statics } from "../../../config/images";
import { TypeAnimation } from "react-type-animation";
import { useProjects } from "../../../stores/stores";

const HeaderProfileComponent = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const icon2Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
    hover: { scale: 1.1 },
  };

  const iphoneVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  };

  const cloudVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  const desktopVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  const webVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  const cv_link = useProjects((state) => state.cv_link);

  useEffect(() => {
    if (!hasAnimated) {
      const timerIn = setTimeout(() => {
        setIsHovered(true);
      }, 2000);

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

  return (
    <div
      className="flex flex-col md:grid md:grid-cols-12 p-10 text-lightblue h-auto min-h-[85vh] bg-darkblue mt-[9.8vh]"
      ref={refs.about}
    >
      <div className="col-span-1"></div>
      <div className="col-span-6 flex flex-col justify-center">
        <section className="flex items-center">
          <motion.img
            loading="eager"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            src={statics.fotoPerfil}
            className="w-24 md:w-32 h-28 md:h-40 mt-4 rounded-lg ml-6"
          />
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-auto h-32 md:mt-3 ml-5"
          >
            <TypeAnimation
              wrapper="h2"
              className="font-bold text-sm md:text-lg text-midblue"
              speed={90}
              cursor={false}
              sequence={[
                "Software Engineer | Mobile (Flutter) & Cloud Specialist (GCP/Azure) | Python Backend",
              ]}
            />
            <TypeAnimation
              wrapper="h2"
              className="font-bold text-sm md:text-lg text-midblue"
              speed={90}
              cursor={false}
              sequence={["Eduard Nicolás Sarmiento Herrera"]}
            />
            {/* <TypeAnimation 
              wrapper="h3"
              speed={90}
              cursor={false}
              className="font-semibold text-sm md:text-lg text-midblue"
              sequence={["Microsoft Azure Architect Certified"]}
            /> */}
            <section className="flex gap-x-4 pt-2">
              <a
                href="https://github.com/edunickdev"
                target="_blank"
                className="text-sm md:text-lg hover:text-midblue transition-all duration-250 text-center z-10"
              >
                Ver Github
              </a>
              <a
                href="https://www.linkedin.com/in/eduard-nicolas-sarmiento-herrera"
                target="_blank"
                className="text-sm md:text-lg hover:text-midblue transition-all duration-250 text-center z-10"
              >
                Ver LinkedIn
              </a>
              <a
                href={cv_link && cv_link}
                target="_blank"
                className="text-sm md:text-lg hover:text-midblue transition-all duration-250 text-center z-10"
              >
                Descargar CV
              </a>
            </section>
          </motion.div>
        </section>
        <section className="flex flex-col m-5 md:mt-0 pt-5 md:pt-0 md:pr-14 justify-between items-start">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 font-semibold text-xl md:text-2xl"
          >
            Apasionado por la tecnología y la innovación
          </motion.h2>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-5 md:pr-10 text-small md:text-lg"
          >
            Ingeniero de Software con más de 3 años de experiencia en el ciclo
            completo de desarrollo (SDLC). Especialista en la construcción de
            arquitecturas móviles escalables con Flutter y backends robustos en
            Python (FastAPI). Experto en implementación de flujos CI/CD y
            despliegues en nube (Azure/GCP). Combino una sólida capacidad
            técnica en integración de IA Generativa (OpenAI/RAG) con una
            trayectoria previa en el sector financiero, aportando una visión
            estratégica sobre seguridad de datos y eficiencia operativa.
          </motion.span>
        </section>
      </div>
      <section className="col-span-4 flex justify-center items-center">
        <div className="w-64 md:h-64 relative p-5">
          {/* Imagen de icon2 con eventos de hover */}
          <motion.img
            loading="eager"
            src={statics.icon2}
            className="w-56 h-56 self-center justify-self-center"
            variants={icon2Variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ delay: 1.5 }}
          />

          {/* Animaciones de entrada y salida para las otras imágenes */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.img
                  loading="eager"
                  src={statics.cloud}
                  className="absolute py-5 w-8 md:py-0 md:w-10 -top-2 -left-7 md:-left-14"
                  variants={cloudVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.iphone}
                  className="absolute py-5 w-8 md:py-0 md:w-10 -top-2 -right-7 md:-right-14"
                  variants={iphoneVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.web}
                  className="absolute py-5 w-8 md:py-0 md:w-10 bottom-2 -right-7 md:-right-14"
                  variants={webVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.desktop}
                  className="absolute py-5 w-8 md:py-0 md:w-10 bottom-2  -left-7 md:-left-14"
                  variants={desktopVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HeaderProfileComponent;
