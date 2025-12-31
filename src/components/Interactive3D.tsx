"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, ContactShadows, Environment, PerspectiveCamera, Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const projectNames = [
  "Smart Parking System",
  "FromFlow",
  "Activity Point Tracker",
  "Malayalam FML font converter",
  "ADVAITH",
];

function Card({ 
  position, 
  rotation, 
  index, 
  title 
}: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  index: number,
  title: string
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (!group.current) return;
    
    // Smooth mouse parallax
    const targetX = (mouse.x * 2);
    const targetY = (mouse.y * 2);
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, position[0] + targetX * (0.5 + index * 0.1), 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1] + targetY * (0.5 + index * 0.1), 0.05);
    
    // Subtle tilt
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, rotation[0] + (mouse.y * 0.2), 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, rotation[1] + (mouse.x * 0.2), 0.05);
  });

  return (
    <Float
      speed={1.5} 
      rotationIntensity={0.2} 
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={group} position={position} rotation={rotation}>
        <RoundedBox args={[2.5, 3.5, 0.12]} radius={0.15} smoothness={4} ref={mesh}>
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={0.2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
            roughness={0}
            transmission={1}
            ior={1.2}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0, 0.07]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoS8SByqN_S_1BvR_H5f8Q.woff"
          maxWidth={2}
          textAlign="center"
          material-toneMapped={false}
        >
          {title.toUpperCase()}
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  const cards = useMemo(() => {
    return [
      { position: [2, 1, -2], rotation: [0.2, -0.3, 0.1] },
      { position: [4, -1, -3], rotation: [-0.1, -0.5, -0.2] },
      { position: [1, -2, -4], rotation: [0.3, -0.2, 0.4] },
      { position: [6, 2, -5], rotation: [-0.2, -0.6, 0.1] },
      { position: [3, 3, -3.5], rotation: [0.1, -0.4, -0.1] },
    ] as const;
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4444ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4444" />
      <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      
      <group position={[1, 0, 0]}>
        {cards.map((card, i) => (
          <Card 
            key={i} 
            index={i}
            title={projectNames[i] || "Project"}
            position={card.position as [number, number, number]} 
            rotation={card.rotation as [number, number, number]} 
          />
        ))}
      </group>
  
      <ContactShadows
        position={[0, -5, 0]}
        opacity={0.4}
        scale={30}
        blur={2.5}
        far={10}
        color="#000000"
      />
    </>
  );
}

export function Interactive3D() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,50,0.1),transparent)]" />
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
