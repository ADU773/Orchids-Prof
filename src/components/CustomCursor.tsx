"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .clickable');
      const isShowcase = target.closest('.showcase-item');
      
      if (isShowcase) {
        setIsHovered(true);
        setHoverType('view');
      } else if (isClickable) {
        setIsHovered(true);
        setHoverType('pointer');
      } else {
        setIsHovered(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [moveCursor]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/30 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
          width: isHovered ? (hoverType === 'view' ? 80 : 60) : 32,
          height: isHovered ? (hoverType === 'view' ? 80 : 60) : 32,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        <AnimatePresence>
          {hoverType === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold uppercase tracking-widest text-white mix-blend-normal"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl pointer-events-none z-[9998]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
          opacity: isHovered ? 1 : 0.5,
        }}
      />
    </>
  );
}
