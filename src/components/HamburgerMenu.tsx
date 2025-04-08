"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const sidebarVariants = {
  open: {
    x: 0
  },
  closed: {
    x: "100%"
  }
};

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 20,
    opacity: 0
  }
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-white focus:outline-none cursor-pointer">
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white transition-transform"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white transition-transform"
          />
        </div>
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-sm">
        <motion.ul
          variants={listVariants}
          className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <motion.li
              variants={listItemVariants}
              key={item.label}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.8 }}>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl hover:text-purple-500 transition-colors">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
}
