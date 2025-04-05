"use client";

import { motion } from "motion/react";

export default function AnimatedCardTwo() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <div className="group isolate flex flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="relative z-10 flex-none px-6 order-last pb-6">
          <h3 className="text-sm font-medium text-gray-950">Invitations</h3>
          <p className="mt-2 text-pretty text-sm/5 text-gray-600">
            Fuel your application&apos;s growth by making it simple for your customers to invite
            their team.
          </p>
        </div>

        <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem] h-[10.25rem]">
          <div className="flex h-full items-center justify-center">
            <div className="relative flex items-center gap-1.5 rounded-full bg-gray-800 px-2 py-1 text-2xs font-medium text-white shadow-[0_2px_13px_rgba(0,0,0,0.2),0_2px_4px_rgba(47,48,55,0.3)] ring-1 ring-gray-800">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
                <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
                  <rect width="12.5" height="10.5" x="1.75" y="2.75" rx="2"></rect>
                  <path d="M4.75 5.75 8 8.25l3.25-2.5"></path>
                </g>
              </svg>
              Invite this person
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-gray-950/5"
                //   style="transform: scaleX(1) scaleY(1); opacity: 0;"

                initial={{
                  scale: 0.5,
                  opacity: 0
                }}
                animate={{
                  scale: 1.5,
                  opacity: 1
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-gray-950/5 "
                //   style="transform: scaleX(1) scaleY(1); opacity: 0;"
                initial={{
                  scale: 0.5,
                  opacity: 0
                }}
                animate={{
                  scale: 1.5,
                  opacity: 1
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-gray-950/5"
                //   style="transform: scaleX(1) scaleY(1); opacity: 0;"

                initial={{
                  scale: 0.5,
                  opacity: 0
                }}
                animate={{
                  scale: 1.5,
                  opacity: 1
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <div className="absolute left-1/2 top-1/2 -z-10 -ml-36 -mt-32 aspect-[288/256] w-72">
                <svg
                  viewBox="0 0 288 256"
                  fill="none"
                  className="absolute inset-0 size-full stroke-gray-950/10">
                  <path d="M4 0v112c0 8.837 7.163 16 16 16h248c8.837 0 16 7.163 16 16v112" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
