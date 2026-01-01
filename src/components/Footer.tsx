"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Discord", url: "https://discord.com" },
  { name: "GitHub", url: "https://github.com" },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
];

export function Footer() {
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  return (
    <footer className="relative py-16 px-6 bg-transparent border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] bg-clip-text text-transparent">
                ADVAITH
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                onClick={(e) => handleSocialClick(e, social.url)}
                className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            2024 ADVAITH. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
