"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10001] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 overflow-hidden"
            >
                <h2 className="text-4xl font-bold tracking-[0.5em] text-white">
                  ADVAITH
                </h2>

              <motion.div 
                className="h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent w-full mt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00f3ff] to-[#bc13fe]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <motion.div 
              className="mt-6 font-mono text-sm tracking-widest text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f3ff]/10 rounded-full blur-[120px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
