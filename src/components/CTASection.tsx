"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const avatarColors = [
  ["#00f3ff", "#0066ff"],
  ["#bc13fe", "#ff00aa"],
  ["#00a2ff", "#00f3ff"],
  ["#ff6b6b", "#bc13fe"],
  ["#00f3ff", "#bc13fe"],
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f3ff]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#bc13fe]/10 via-transparent to-transparent" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f3ff]/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#bc13fe]/20 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function CTASection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 bg-[#030303] overflow-hidden min-h-screen flex items-center">
      <AnimatedBackground />

      <motion.div 
        ref={ref} 
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-xs font-medium tracking-[0.3em] uppercase text-[#00f3ff] glass rounded-full">
            Ready to Begin?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-white via-[#00f3ff] to-[#bc13fe] bg-clip-text text-transparent">
            Enter the
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#bc13fe] via-[#00f3ff] to-white bg-clip-text text-transparent">
            NEXUS
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-white/50 mb-12"
        >
          Join thousands of creators who have already stepped into the future of digital design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-10 py-5 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#bc13fe]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#bc13fe] to-[#00f3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-black font-semibold text-lg">
              <span>Get Started Free</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>

          <motion.button
            className="px-10 py-5 rounded-full border border-white/20 text-white/80 hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <div className="flex -space-x-3">
            {avatarColors.map((colors, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#030303] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
                }}
              />
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold">10,000+</p>
            <p className="text-white/40 text-sm">Creators joined</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
