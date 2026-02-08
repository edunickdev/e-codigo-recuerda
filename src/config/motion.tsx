/**
 * Properly typed Framer Motion components for v11+
 *
 * In Framer Motion v11+, motion.* components don't automatically include
 * standard HTML attributes like className, onClick, etc. This file provides
 * properly typed wrappers that can be used across the project.
 */
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

// Properly typed motion components that include HTML attributes
export const MotionDiv = motion.div as React.FC<
  HTMLMotionProps<"div"> & React.HTMLAttributes<HTMLDivElement>
>;

export const MotionSpan = motion.span as React.FC<
  HTMLMotionProps<"span"> & React.HTMLAttributes<HTMLSpanElement>
>;

export const MotionSection = motion.section as React.FC<
  HTMLMotionProps<"section"> & React.HTMLAttributes<HTMLElement>
>;

export const MotionImg = motion.img as React.FC<
  HTMLMotionProps<"img"> & React.ImgHTMLAttributes<HTMLImageElement>
>;

export const MotionP = motion.p as React.FC<
  HTMLMotionProps<"p"> & React.HTMLAttributes<HTMLParagraphElement>
>;

export const MotionH1 = motion.h1 as React.FC<
  HTMLMotionProps<"h1"> & React.HTMLAttributes<HTMLHeadingElement>
>;

export const MotionH2 = motion.h2 as React.FC<
  HTMLMotionProps<"h2"> & React.HTMLAttributes<HTMLHeadingElement>
>;

export const MotionH3 = motion.h3 as React.FC<
  HTMLMotionProps<"h3"> & React.HTMLAttributes<HTMLHeadingElement>
>;

export const MotionUl = motion.ul as React.FC<
  HTMLMotionProps<"ul"> & React.HTMLAttributes<HTMLUListElement>
>;

export const MotionLi = motion.li as React.FC<
  HTMLMotionProps<"li"> & React.HTMLAttributes<HTMLLIElement>
>;

export const MotionButton = motion.button as React.FC<
  HTMLMotionProps<"button"> & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const MotionNav = motion.nav as React.FC<
  HTMLMotionProps<"nav"> & React.HTMLAttributes<HTMLElement>
>;

export const MotionA = motion.a as React.FC<
  HTMLMotionProps<"a"> & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

// Re-export AnimatePresence for convenience
export { AnimatePresence };

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
