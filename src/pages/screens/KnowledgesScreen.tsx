import { MotionDiv, staggerContainer, fadeInUp } from "../../config/motion";
import { useInView } from "react-intersection-observer";
import { sections } from "../../config/helpers/constants";
import { Tooltip } from "@nextui-org/react";

const KnowledgesScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="section-padding bg-bg-secondary dark:bg-bg-elevated"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            ref={refs.technologies}
            className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4"
          >
            Stack <span className="gradient-text">Tecnológico</span>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Herramientas que utilizo para construir soluciones robustas y
            escalables
          </p>
        </MotionDiv>

        {/* Skills Grid */}
        {inView && (
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sections.map((section, sectionIndex) => (
              <MotionDiv
                key={sectionIndex}
                variants={fadeInUp}
                className="glass-card p-6"
              >
                {/* Category Title */}
                <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-4 pb-2 border-b border-border-color">
                  {section.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {section.technologies.map((technology, techIndex) => (
                    <Tooltip
                      key={techIndex}
                      content={technology.text}
                      classNames={{
                        content:
                          "bg-bg-card dark:bg-bg-dark text-text-primary dark:text-text-primary-dark font-medium",
                      }}
                    >
                      <MotionDiv
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: sectionIndex * 0.1 + techIndex * 0.05,
                        }}
                        className="group relative"
                      >
                        <div
                          className="w-14 h-14 flex items-center justify-center p-2 rounded-xl 
                          bg-bg-light dark:bg-bg-dark border border-border-color
                          transition-all duration-300 cursor-pointer
                          hover:border-accent dark:hover:border-accent-dark
                          hover:shadow-lg dark:hover:shadow-glow
                          group-hover:scale-110"
                        >
                          <img
                            src={technology.path}
                            alt={technology.text}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      </MotionDiv>
                    </Tooltip>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

export default KnowledgesScreen;
