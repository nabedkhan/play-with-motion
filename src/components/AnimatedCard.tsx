"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Icon2fa,
  IconBrandReact,
  IconMessage,
  IconPlus,
  IconUser,
  IconX
} from "@tabler/icons-react";

export default function AnimatedCard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            whileHover="hover"
            initial={{
              opacity: 0,
              scale: 0.97,
              filter: "blur(8px)"
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)"
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              filter: "blur(8px)"
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
            className="p-6 flex flex-col w-72 min-h-[27rem] h-[27rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <h2 className="text-xs font-semibold text-center">Organization UI Components</h2>
            <p className="text-[10px] text-gray-500 text-center mt-2">
              Clerk&apos;s UI components add turn-key simplicity to complex Organization management
              tasks.
            </p>

            <div className="flex items-center justify-center mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex cursor-pointer items-center gap-1 text-[10px] bg-white px-2 py-1 rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <IconBrandReact size={10} className="text-gray-400" />
                <span>Clerk</span>
                <IconX size={8} className="text-gray-400" />
              </button>
            </div>

            <div className="bg-gray-100 h-full w-full mt-4 relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 rounded-lg border border-dashed border-gray-200"></div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(8px)"
                }}
                // whileHover={{
                //   opacity: 1,
                //   scale: 1,
                //   filter: "blur(0px)"
                // }}
                variants={{
                  hover: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                  }
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-full h-full bg-white rounded-lg divide-y divide-gray-200">
                <div className="flex gap-2 p-4">
                  <div className="border border-gray-200 w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <IconMessage size={12} className="text-gray-400" />
                  </div>

                  <div>
                    <h3 className="text-[8px] font-bold text-gray-600">Tailwind UI Components</h3>
                    <p className="text-[8px] text-gray-400">A collection of the components</p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="border border-gray-200 w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <IconUser size={12} className="text-gray-400" />
                  </div>

                  <div>
                    <h3 className="text-[8px] font-bold text-gray-600">Cameron Walker</h3>
                    <p className="text-[8px] text-gray-400">cameron@clerk.com</p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="border border-gray-200 w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <Icon2fa size={12} className="text-gray-400" />
                  </div>

                  <div>
                    <h3 className="text-[8px] font-bold text-gray-600">Highly Secure</h3>
                    <p className="text-[8px] text-gray-400">
                      All data is encrypted at rest and in transit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="border border-gray-200 w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <Icon2fa size={12} className="text-gray-400" />
                  </div>

                  <div>
                    <h3 className="text-[8px] font-bold text-gray-600">Highly Secure</h3>
                    <p className="text-[8px] text-gray-400">
                      All data is encrypted at rest and in transit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center justify-center p-3 cursor-pointer">
                  <div className="border border-gray-200 w-4 h-4 rounded-md bg-white flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <IconPlus size={10} className="text-gray-400" />
                  </div>

                  <p className="text-[8px] text-gray-400">Create Organization</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
