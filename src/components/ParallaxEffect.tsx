"use client";

import Image from "next/image";
import { useRef } from "react";
import { IconBrandReact, IconChartPie, IconRocket } from "@tabler/icons-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionTemplate
} from "motion/react";

type Feature = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

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

export default function ParallaxEffect() {
  //   const mainRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-10 h-0.5 w-full bg-purple-500 origin-left"
      /> */}

      <div className="max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </main>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-center text-white p-4 md:p-8 md:py-64">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale
        }}
        className="w-full md:w-1/2 space-y-4 md:pr-8">
        <div className="flex items-center space-x-2 mb-4">{feature.icon}</div>

        <h2 className="text-2xl md:text-4xl font-medium mb-2">{feature.title}</h2>

        <p className="text-base text-gray-400">{feature.description}</p>
      </motion.div>

      <motion.div
        style={{
          y: translateY,
          opacity
        }}
        transition={{
          duration: 2
        }}
        className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="rounded-lg overflow-hidden shadow-2xl w-96 mx-auto">
          <Image
            src={feature.image}
            alt="Land Rover in a western town"
            className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </div>
  );
}
