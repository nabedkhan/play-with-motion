"use client";

import { useScroll, motion } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-10 h-0.5 w-full bg-purple-500 origin-left"
    />
  );
}
