"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "./ui/magnetic";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Magnetic amount={0.2}>
            <Link href="/" className="text-lg font-bold tracking-tighter">
              ADVAITH
            </Link>
          </Magnetic>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Magnetic key={link.label} amount={0.3}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500 cursor-pointer"
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </div>

          <Magnetic amount={0.2}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </Magnetic>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-4xl font-bold tracking-tight text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <p className="text-sm text-white/40 mb-4">Connect with me</p>
                <div className="flex gap-6">
                  {["Twitter", "Discord", "GitHub"].map((social) => (
                    <a
                      key={social}
                      href={social === "Twitter" ? "https://twitter.com" : social === "Discord" ? "https://discord.com" : "https://github.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        const url = social === "Twitter" ? "https://twitter.com" : social === "Discord" ? "https://discord.com" : "https://github.com";
                        window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
                      }}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
