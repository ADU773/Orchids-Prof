"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { GothicCards } from "./GothicCards";
import { Magnetic } from "./ui/magnetic";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sceneScale = useTransform(springScroll, [0, 1], [1, 1.2]);
  const sceneOpacity = useTransform(springScroll, [0, 0.5, 1], [1, 0.8, 0]);
  const textScale = useTransform(springScroll, [0, 0.5], [1, 1.05]);
  const textOpacity = useTransform(springScroll, [0, 0.1], [1, 0.9]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full overflow-hidden bg-black flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Scene Layer (Behind the text) */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          scale: sceneScale, 
          opacity: sceneOpacity
        }}
      >
        <GothicCards />
      </motion.div>

      {/* Typography Mask Layer (The focal point) */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ scale: textScale, opacity: textOpacity }}
      >
        <div className="relative w-full h-full flex items-center px-8 md:px-24">
          <svg className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="heroTextMask">
                {/* Everything white is visible, everything black is hidden */}
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="5%"
                  y="50%"
                  textAnchor="start"
                  dominantBaseline="middle"
                  className="font-black tracking-[-0.08em] uppercase select-none"
                  style={{ fontSize: "18vw", fill: "black" }}
                >
                  ADVAITH
                </text>
              </mask>
            </defs>
            {/* This black rect covers the whole screen except where the text is (the mask) */}
            <rect
              width="100%"
              height="100%"
              fill="black"
              mask="url(#heroTextMask)"
            />
          </svg>
          
          {/* Subtle Grain over the mask */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </motion.div>

      {/* Red Accents & Atmospheric Lighting */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Diagonal Gradient (Reference Inspiration) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-black/40" />
        
        {/* Hover Glow */}
        <motion.div 
          animate={{ 
            opacity: isHovered ? 0.4 : 0.15,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ff0000_0%,transparent_50%)] mix-blend-color-dodge transition-all duration-1000" 
        />
      </div>

      {/* UI Elements (Foreground) */}
      <div className="relative z-20 w-full h-screen flex flex-col justify-between p-8 md:p-16 pointer-events-none">
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-red-600" />
            <span className="text-[10px] font-bold tracking-[0.8em] text-white/50 uppercase">
              Visual Alchemist
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase"
          >
            Est. 2024
          </motion.div>
        </div>

        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="max-w-[35ch] text-[12px] text-white/40 uppercase tracking-[0.4em] leading-relaxed font-light">
                Digital experiences <br />
                born from the <br />
                void of creation.
              </p>
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full border border-red-600/30" />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="pointer-events-auto"
          >
            <Magnetic>
              <button className="group relative px-10 py-5 overflow-hidden border border-white/5 bg-white/[0.02] hover:border-red-600/40 transition-all duration-700 backdrop-blur-sm">
                <span className="relative z-10 text-[10px] font-black tracking-[0.5em] text-white uppercase group-hover:text-red-500 transition-colors duration-500">
                  Enter The Deck
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-red-600 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
                />
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-25 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_40%,black_100%)] opacity-60" />
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Scroll Hint */}
      <motion.div 
        style={{ opacity: useTransform(springScroll, [0, 0.05], [1, 0]) }}
        className="absolute bottom-10 left-10 z-20 flex items-center gap-6"
      >
        <span className="text-[8px] font-bold tracking-[0.6em] text-white/20 uppercase vertical-text">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
