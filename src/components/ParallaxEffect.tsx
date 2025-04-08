"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IconBrandReact, IconChartPie, IconRocket } from "@tabler/icons-react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionTemplate,
  useMotionValueEvent
} from "motion/react";

interface Feature {
  id: number;
  title: string;
  image: string;
  description: string;
  icon: React.ReactNode;
}

const features = [
  {
    id: 1,
    icon: <IconRocket size={32} className="text-white" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate ultra realistic images in no time at all.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    icon: <IconChartPie size={32} className="text-white" />,
    title: "Create stunning 3D animations with ease",
    description: "With our state of the art AI, you can create stunning 3D animations with ease.",
    image:
      "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    icon: <IconBrandReact size={32} className="text-white" />,
    title: "Build interactive React components quickly",
    description:
      "With our state of the art AI, you can build interactive React components quickly.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

const colors = ["#0d1b2a", "#252422", "#333d29"];

export default function ParallaxEffect() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState(colors[0]);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * colors.length);
    setBackground(colors[index]);
  });

  return (
    <motion.main
      ref={mainRef}
      className="min-h-screen font-[family-name:var(--font-geist-sans)] relative"
      initial={false}
      animate={{ background }}
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}>
      <div className="max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </motion.main>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [300, -300]), {
    stiffness: 100,
    damping: 12,
    mass: 1
  });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-center text-white p-4 md:p-8 md:py-64">
      <motion.div
        style={{
          scale,
          filter: useMotionTemplate`blur(${blur}px)`
        }}
        className="w-full md:w-1/2 space-y-4 md:pr-8">
        <div className="flex items-center space-x-2 mb-4">{feature.icon}</div>

        <h2 className="text-2xl md:text-4xl font-medium mb-2">{feature.title}</h2>

        <p className="text-base text-gray-400">{feature.description}</p>
      </motion.div>

      <motion.div
        style={{
          opacity,
          y: translateY
        }}
        transition={{
          duration: 2
        }}
        className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="rounded-lg overflow-hidden shadow-2xl w-[35rem] h-[25rem] mx-auto relative">
          <Image
            fill
            priority
            src={feature.image}
            alt="Land Rover in a western town"
            className="w-full object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
