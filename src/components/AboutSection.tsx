"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
      <section ref={containerRef} className="relative py-64 px-6 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 block">
                The Philosophy
              </span>
              <h2 className="text-[6vw] lg:text-[5vw] font-bold tracking-tighter leading-[0.9] uppercase mb-12">
                Digital <br /> Craftsmanship <br /> <span className="text-white/20">Redefined</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="lg:mt-32"
            >
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-12 max-w-xl">
                We believe that the digital world should be as tactile and immersive as the physical one. 
                Our approach blends cutting-edge technology with timeless design principles to create 
                experiences that don't just work—they resonate.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-4 block">Focus</span>
                  <ul className="text-xs uppercase tracking-widest text-white/60 space-y-2">
                    <li>Creative Development</li>
                    <li>3D Interactivity</li>
                    <li>Motion Design</li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-4 block">Tools</span>
                  <ul className="text-xs uppercase tracking-widest text-white/60 space-y-2">
                    <li>Next.js / React</li>
                    <li>Three.js / WebGL</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Element */}
        <motion.div 
          style={{ y }}
          className="absolute right-[-10vw] top-1/2 -translate-y-1/2 w-[40vw] aspect-square rounded-full bg-white/[0.01] border border-white/5 blur-3xl pointer-events-none" 
        />
      </section>
    );
  }

