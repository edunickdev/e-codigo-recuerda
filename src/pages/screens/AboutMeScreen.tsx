import { Image, Tooltip } from "@nextui-org/react";
import {
  MotionDiv,
  MotionA,
  staggerContainer,
  fadeInUp,
} from "../../config/motion";
import { formalStudies } from "../../config/helpers/constants";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FiAward, FiBook, FiCloud } from "react-icons/fi";

const AboutMeScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const [listStudies, setListStudies] = useState(formalStudies);
  const [selectedFilter, setSelectedFilter] = useState("Formal");

  const handleStudies = (type: string) => {
    setSelectedFilter(type);
    setListStudies(formalStudies.filter((study) => study.type === type));
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    handleStudies("Formal");
  }, []);

  const filters = [
    { key: "Formal", label: "Formales", icon: FiBook },
    { key: "Microsoft", label: "Microsoft Azure", icon: FiCloud },
    { key: "Complementarios", label: "Complementarios", icon: FiAward },
  ];

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
            ref={refs.studies}
            className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4"
          >
            Formación <span className="gradient-text">Continua</span>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Certificaciones y estudios que respaldan mi expertise técnico
          </p>
        </MotionDiv>

        {/* Filter Tabs */}
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => handleStudies(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300
                ${
                  selectedFilter === key
                    ? "bg-accent dark:bg-accent-dark text-white shadow-lg"
                    : "glass-card hover:bg-accent/10 dark:hover:bg-accent-dark/10 text-text-primary dark:text-text-primary-dark"
                }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </MotionDiv>

        {/* Microsoft Badge Hint */}
        {selectedFilter === "Microsoft" && inView && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-text-secondary dark:text-text-secondary-dark mb-6"
          >
            Haz click en los escudos para ver los certificados
          </MotionDiv>
        )}

        {/* Studies Grid */}
        {inView && (
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {listStudies.map((study, index) => (
              <MotionDiv
                key={`${study.title}-${index}`}
                variants={fadeInUp}
                className="group"
              >
                {selectedFilter === "Complementarios" ? (
                  <Tooltip
                    content={study.title}
                    offset={5}
                    showArrow
                    classNames={{
                      content:
                        "bg-bg-card dark:bg-bg-elevated text-text-primary dark:text-text-primary-dark",
                    }}
                  >
                    <div className="glass-card p-5 h-full flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                          loading="eager"
                          src={study.image}
                          className={`object-contain ${study.institution === "Platzi" ? "w-16" : "w-12"}`}
                          alt={study.institution}
                          radius="none"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-sm text-text-primary dark:text-text-primary-dark line-clamp-2">
                          {study.title}
                        </h3>
                        <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-1">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </Tooltip>
                ) : (
                  <MotionA
                    href={study.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 h-full flex flex-col items-center gap-4 cursor-pointer group-hover:scale-[1.02] transition-transform"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        loading="eager"
                        src={study.image}
                        className="w-40 h-auto object-cover transition-transform group-hover:scale-105"
                        alt={study.title}
                        radius="lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg text-text-primary dark:text-text-primary-dark mb-1">
                        {study.title}
                      </h3>
                      <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                        {study.description}
                      </p>
                    </div>
                  </MotionA>
                )}
              </MotionDiv>
            ))}
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

export default AboutMeScreen;
