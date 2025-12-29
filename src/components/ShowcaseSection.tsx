"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const showcaseItems = [
  {
    id: "01",
    title: "METAMORPHOSIS",
    category: "3D EXPERIENCE",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
  },
  {
    id: "02",
    title: "NEURAL INTERFACE",
    category: "DESIGN SYSTEMS",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    id: "03",
    title: "VOID WALKER",
    category: "MOTION DESIGN",
    image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=1200&q=80",
  },
  {
    id: "04",
    title: "QUANTUM DREAMS",
    category: "INTERACTIVE ART",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  },
];

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-24 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.8] uppercase mb-4"
          >
            SELECTED <span className="text-white/20 italic">WORKS</span>
          </motion.h2>
          <div className="w-full h-[1px] bg-white/10" />
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex-shrink-0 group cursor-none"
              style={{ width: "70vw" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5 rounded-sm overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-expo scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700" />
                
                <div className="absolute top-8 right-8 text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
                  {item.category}
                </div>

                <div className="absolute bottom-8 left-8">
                   <div className="flex items-center gap-4 mb-2">
                     <span className="text-[10px] font-mono text-white/40">{item.id}</span>
                     <div className="w-8 h-[1px] bg-white/20" />
                   </div>
                   <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                     {item.title}
                   </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-12 left-6 md:left-24">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
              <div className="w-48 h-[2px] bg-white/5 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white"
                  style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
