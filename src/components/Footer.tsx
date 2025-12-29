"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.a 
            href="/" 
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] bg-clip-text text-transparent">
              NEXUS
            </span>
          </motion.a>

          <div className="flex items-center gap-6">
            {["Twitter", "Discord", "GitHub"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            2024 NEXUS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
