"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1682687220801-eef408f95d71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export default function ImageGridWithLayout() {
  const [selected, setSelected] = useState<{
    image: string | null;
    index: number | null;
  }>({
    image: null,
    index: null
  });

  const ref = useOutsideClick(() =>
    setSelected({
      image: null,
      index: null
    })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={`image-${index}`}
            onClick={() => setSelected({ image, index })}
            className="cursor-pointer relative h-64">
            <Image
              fill
              src={image}
              alt={`Grid image ${index + 1}`}
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        ))}
      </div>

      {selected.image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "easeInOut"
          }}
          onClick={() => setSelected({ image: null, index: null })}
          className="fixed inset-0 bg-black z-40 cursor-pointer"
        />
      )}

      {selected.image && (
        <motion.div
          ref={ref}
          layoutId={`image-${selected.index}`}
          className="fixed inset-0 z-50 max-w-4xl h-[80vh] m-auto">
          <div className="relative w-full h-full">
            <Image
              fill
              src={selected.image}
              alt="Selected image"
              className="object-cover rounded-lg"
              sizes="100vw"
              quality={90}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
