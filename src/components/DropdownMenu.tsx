"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

const items = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Contact", href: "/contact" }
];

const menuVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2 }
  }
};

const menuContentVariants = {
  hidden: {
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center  gap-1 px-4 py-2 bg-purple-600 cursor-pointer text-white rounded-md hover:bg-purple-700 transition-colors">
          <span>Categories</span>
          <IconChevronDown
            size={18}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <motion.div variants={menuContentVariants}>
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors">
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
