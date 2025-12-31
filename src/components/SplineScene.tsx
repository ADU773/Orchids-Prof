import { SplineRuntimeScene } from "./SplineRuntimeScene";

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export function SplineScene({ scene, className = "", onLoad }: SplineSceneProps) {
  return (
    <div className={`relative ${className}`}>
      <SplineRuntimeScene
        scene={scene}
        onLoad={onLoad}
        className="w-full h-full"
      />
    </div>
  );
}
