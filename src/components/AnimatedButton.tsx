"use client";

import { motion } from "motion/react";

export default function AnimatedButton() {
  return (
    <main
      className="perspective-[1000px] [transform-style:preserve-3d] font-[family-name:var(--font-geist-sans)] h-screen w-full flex items-center justify-center bg-neutral-950"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "15px 15px",
        backgroundPosition: "center"
      }}>
      <motion.button
        // initial={{ rotate: 0 }}
        // animate={{
        //   //   rotate: 25
        //   rotate: [0, 25, 0] //  keyframes
        // }}
        // transition={{
        //   duration: 2,
        //   ease: "easeInOut"
        //   //   repeat: Infinity,
        //   //   repeatType: "loop",
        //   //   repeatDelay: 1,
        //   //   delay: 1
        // }}

        whileHover={{
          rotateX: 30,
          rotateY: 10,
          scale: 1.1,
          boxShadow: "0 20px 50px rgba(147, 51, 234, 0.2)"
        }}
        whileTap={{
          scale: 1
        }}
        style={{
          translateZ: 100
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="group cursor-pointer relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
        <span className="group-hover:text-purple-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-3/4 mx-auto blur-sm"></span>
      </motion.button>
    </main>
  );
}
