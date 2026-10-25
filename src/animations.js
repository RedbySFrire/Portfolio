export const pageVariants = {
  initial: { opacity: 0, x: 80, skewX: -6 },
  animate: { opacity: 1, x: 0, skewX: 0, transition: { type: "spring", stiffness: 350, damping: 25 } },
  exit: { opacity: 0, x: -80, skewX: 6, transition: { duration: 0.15 } },
};