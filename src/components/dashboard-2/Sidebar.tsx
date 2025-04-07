"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconLayoutDashboard,
  IconUsers,
  IconChartPie,
  IconSettings,
  IconBrandReact
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

const menuItems = [
  { icon: <IconLayoutDashboard size={20} />, label: "Dashboard", href: "#" },
  { icon: <IconUsers size={20} />, label: "Users", href: "#" },
  { icon: <IconChartPie size={20} />, label: "Analytics", href: "#" },
  { icon: <IconSettings size={20} />, label: "Settings", href: "#" }
];

const sidebarVariants = {
  open: {
    width: "5rem",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  closed: {
    width: "16rem",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const listItemVariants = {
  open: {
    opacity: 0,
    transition: {
      duration: 0.1
    }
  },
  closed: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 5
    }
  }
};

export default function Sidebar({ isOpen }: { isOpen: boolean; toggleSidebar: () => void }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <motion.div initial={false} animate={!isOpen ? "open" : "closed"}>
      <motion.div variants={sidebarVariants} className="h-screen bg-white shadow-lg">
        <div className="flex items-center justify-between h-16 px-4 border-b cursor-pointer">
          <IconBrandReact size={27} className="text-blue-500" />
        </div>

        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="min-w-12">
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`flex items-center px-4 py-3 text-gray-600 font-medium text-sm rounded-lg transition-colors ${
                    activeItem === item.label ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
                  }`}>
                  <motion.span
                    className="mr-2"
                    initial={false}
                    animate={{ marginRight: isOpen ? "0.5rem" : "0rem" }}
                    transition={{ duration: 0.3 }}>
                    {item.icon}
                  </motion.span>

                  <AnimatePresence>
                    {isOpen && <motion.span variants={listItemVariants}>{item.label}</motion.span>}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
}
