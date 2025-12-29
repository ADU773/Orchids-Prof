"use client";

import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-[#00f3ff] animate-spin" />
        <div className="absolute inset-2 w-12 h-12 rounded-full border-2 border-transparent border-b-[#bc13fe] animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
      </div>
    </div>
  );
}

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && <SplineLoader />}
      <Suspense fallback={<SplineLoader />}>
        <Spline
          scene={scene}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </Suspense>
    </div>
  );
}
