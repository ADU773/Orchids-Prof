"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Work", href: "#work" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Magnetic amount={0.2}>
                  <motion.a 
                    href="/" 
                    className="text-lg font-bold tracking-tighter"
                  >
                    OVERLAY
                  </motion.a>
              </Magnetic>


            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Magnetic key={link.label} amount={0.3}>
                  <a
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              ))}
            </div>

            <Magnetic amount={0.2}>
              <button
                className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
              >
                Menu
              </button>
            </Magnetic>
          </div>


    </motion.nav>
  );
}
