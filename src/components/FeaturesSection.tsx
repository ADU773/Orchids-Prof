"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "01",
    title: "SPATIAL DESIGN",
    description: "Creating immersive digital environments where depth and dimension redefine interaction paradigms.",
  },
  {
    id: "02",
    title: "MOTION LANGUAGE",
    description: "Every pixel moves with purpose. Fluid transitions that breathe life into static interfaces.",
  },
  {
    id: "03",
    title: "INTERACTIVE WEBGL",
    description: "High-performance 3D experiences rendered in real-time for maximum engagement.",
  },
  {
    id: "04",
    title: "DESIGN ENGINEERING",
    description: "The bridge between creative vision and technical execution. Clean code, bold design.",
  },
];

export function FeaturesSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-64 px-6 md:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-[10vw] md:text-[6vw] font-bold tracking-tighter leading-[0.8] uppercase"
            >
              CORE <br /> <span className="text-white/20 italic">CAPABILITIES</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-xs text-[10px] uppercase tracking-[0.2em] text-white/40 md:mt-12"
            >
              Mastering the intersection of design and technology to deliver premium digital products.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="group relative"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-white/20">
                      {feature.id}
                    </span>
                    <div className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-700 ease-expo" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6 group-hover:text-white transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-sm group-hover:text-white/60 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
