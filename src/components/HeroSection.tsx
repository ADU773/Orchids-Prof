"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Interactive3D } from "./Interactive3D";
import { Magnetic } from "./ui/magnetic";

const letterVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.03 + 0.5,
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`${className} inline-flex overflow-hidden py-4`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden bg-[#050505]">
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Interactive3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </motion.div>

      <div className="relative z-10 h-screen flex flex-col justify-end pb-24 px-6 md:px-24">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-start max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
              Senior Creative Developer
            </span>
          </motion.div>

          <h1 className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-[0.75] uppercase mb-12 flex flex-col items-start perspective-1000">
            <AnimatedText text="DORIAN" className="text-white" />
            <AnimatedText text="LODS" className="text-white/20 italic" />
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-[40ch] text-sm md:text-lg text-white/40 font-light leading-relaxed uppercase tracking-widest"
            >
              Building digital experiences where motion <br className="hidden md:block" />
              meets logic and design finds its dimension.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Magnetic>
                <button className="px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:invert transition-all duration-700 ease-expo">
                  View Showcase
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 right-6 md:right-24 z-10 hidden md:block"
      >
        <div className="flex flex-col items-end gap-4">
          <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase vertical-text">Scroll to explore</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
