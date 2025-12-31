"use client";

import { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

interface SplineRuntimeSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export function SplineRuntimeScene({ scene, className = "", onLoad }: SplineRuntimeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);
    appRef.current = app;

    app.load(scene)
      .then(() => {
        setIsLoaded(true);
        onLoad?.();
      })
      .catch((err) => {
        console.error("Spline load error:", err);
      });

    return () => {
      // Cleanup app instance if possible
      // Spline runtime doesn't have a formal destroy yet but we can clear the ref
      appRef.current = null;
    };
  }, [scene, onLoad]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-t-2 border-red-600 animate-spin" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">Initialising 3D</span>
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
