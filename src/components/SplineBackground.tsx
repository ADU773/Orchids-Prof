"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

interface SplineBackgroundProps {
  scene?: string;
}

export function SplineBackground({ 
  scene = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
}: SplineBackgroundProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={
        <div className="w-full h-full bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      }>
        <Spline 
          scene={scene}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
