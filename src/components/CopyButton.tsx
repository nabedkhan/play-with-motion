"use client";

import { useState } from "react";
import { Copy, Mail, SquareCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CopyButton() {
  const [isHover, setIsHover] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("www.nabed.com");
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <button
        className="text-white min-w-56 bg-gradient-to-br from-purple-500 from-35% to-purple-900 px-5 py-3 rounded-xl cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleCopy}>
        <AnimatePresence initial={false} mode="wait">
          {isCopy ? (
            <motion.div
              key="copied"
              className="flex justify-center items-center space-x-2"
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ duration: 0.3 }}>
              <p className="text-sm md:text-base font-medium">Copied</p>
              <SquareCheck size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center">
              <AnimatePresence initial={false}>
                {!isHover && (
                  <motion.div
                    key="mail"
                    initial={{ x: -80, width: 0 }}
                    animate={{ x: 0, width: 20 }}
                    exit={{ x: -80, width: 0 }}
                    transition={{ duration: 0.4 }}>
                    <Mail size={20} />
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-sm md:text-base font-medium px-2">www.nabed.com</p>

              <AnimatePresence initial={false}>
                {isHover && (
                  <motion.div
                    key="copy"
                    initial={{ x: 80, width: 0 }}
                    animate={{ x: 0, width: 20 }}
                    exit={{ x: 80, width: 0 }}
                    transition={{ duration: 0.4 }}>
                    <Copy size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </main>
  );
}
