"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  Environment, 
  PerspectiveCamera, 
  Text, 
  RoundedBox,
  useCursor,
  ContactShadows,
  MeshTransmissionMaterial
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const PROJECTS = [
  { 
    id: "01", 
    title: "Smart Parking", 
    rank: "Q", 
    suit: "♠", 
    isRed: false,
    topic: "IOT PLATFORM",
    description: "Intelligent urban infrastructure."
  },
  { 
    id: "02", 
    title: "FromFlow", 
    rank: "A", 
    suit: "♠", 
    isRed: false,
    topic: "WEB SAAS",
    description: "Seamless workflow automation."
  },
  { 
    id: "03", 
    title: "Activity Tracker", 
    rank: "Q", 
    suit: "♥", 
    isRed: true,
    topic: "MOBILE UTILITY",
    description: "Quantified self aesthetics."
  },
  { 
    id: "04", 
    title: "Malayalam FML", 
    rank: "A", 
    suit: "♥", 
    isRed: true,
    topic: "FIGMA PLUGIN",
    description: "Typography for the masses."
  },
];

function ProjectCard({ position, rotation, index, project }: {
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  project: typeof PROJECTS[0];
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();
  
  useCursor(hovered);

  const accentColor = project.isRed ? "#ff0000" : "#000000";

  useFrame((state) => {
    if (!group.current) return;
    
    const targetX = (mouse.x * viewport.width) / 12;
    const targetY = (mouse.y * viewport.height) / 12;
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, position[0] + targetX * (1 + index * 0.05), 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1] + targetY * (1 + index * 0.05), 0.05);
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, rotation[0] + (mouse.y * 0.2), 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, rotation[1] + (mouse.x * 0.3), 0.05);
    
    const scale = hovered ? 1.15 : 1;
    group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, scale, 0.1));
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group 
        ref={group} 
        position={position} 
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <RoundedBox args={[2.8, 4.2, 0.1]} radius={0.12} smoothness={4}>
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.4} 
            metalness={0.1}
          />
        </RoundedBox>

        {hovered && (
          <mesh position={[0, 0, -0.15]}>
            <planeGeometry args={[3.4, 4.8]} />
            <meshBasicMaterial color="#ff0000" transparent opacity={0.3} />
          </mesh>
        )}

        <group position={[0, 0, 0.06]}>
          {/* Rank & Suit Corners */}
          {[1, -1].map((side) => (
            <group key={side} position={[side * 1.1, side * 1.8, 0]} rotation={[0, 0, side === -1 ? Math.PI : 0]}>
              <Text 
                fontSize={0.35} 
                color={accentColor} 
                anchorX="center"
                anchorY="middle"
              >
                {project.rank}
              </Text>
              <Text 
                position={[0, -0.4, 0]} 
                fontSize={0.3} 
                color={accentColor}
                anchorX="center"
                anchorY="middle"
              >
                {project.suit}
              </Text>
            </group>
          ))}

          {/* Project Content */}
          <group position={[0, 0.2, 0]}>
            <Text 
              fontSize={0.12} 
              color={accentColor} 
              maxWidth={2.2} 
              textAlign="center" 
              anchorY="middle"
              letterSpacing={0.1}
              opacity={0.4}
            >
              {project.topic}
            </Text>
            <Text 
              position={[0, -0.6, 0]} 
              fontSize={0.22} 
              color={accentColor} 
              maxWidth={2.2} 
              textAlign="center" 
              lineHeight={1.2}
              anchorY="middle"
            >
              {project.title.toUpperCase()}
            </Text>
          </group>

          {/* Abstract Illustration (Geometric Oni Mask Vibe) */}
          <mesh position={[0, 1.2, 0]} scale={0.5}>
            <octahedronGeometry />
            <meshStandardMaterial color={accentColor} wireframe />
          </mesh>

          {/* Footer Label */}
          <Text 
            position={[0, -1.7, 0]} 
            fontSize={0.08} 
            color={accentColor} 
            letterSpacing={0.5}
            opacity={0.3}
            anchorX="center"
          >
            EST. 2024 / {project.id}
          </Text>
        </group>

        {/* Rim Light */}
        <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
          <RoundedBox args={[2.8, 4.2, 0.1]} radius={0.12} smoothness={4}>
            <meshBasicMaterial color="#ff0000" wireframe transparent opacity={0.1} />
          </RoundedBox>
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;
  
  const cards = useMemo(() => [
    { project: PROJECTS[0], position: [-4, 0, -2], rotation: [0.1, 0.4, 0.1] },
    { project: PROJECTS[1], position: [-1.4, 0, 0], rotation: [0, 0.1, 0] },
    { project: PROJECTS[2], position: [1.4, 0, 0], rotation: [0, -0.1, 0] },
    { project: PROJECTS[3], position: [4, 0, -2], rotation: [0.1, -0.4, -0.1] },
  ], []);

  const mobileCards = useMemo(() => [
    { project: PROJECTS[0], position: [-1.2, 1.5, -1], rotation: [0.1, 0.3, 0.1] },
    { project: PROJECTS[1], position: [1.2, 0.5, 0], rotation: [0, 0.1, 0] },
    { project: PROJECTS[2], position: [-1.2, -0.5, 0], rotation: [0, -0.1, 0] },
    { project: PROJECTS[3], position: [1.2, -1.5, -1], rotation: [0.1, -0.3, -0.1] },
  ], []);

  const activeCards = isMobile ? mobileCards : cards;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <Environment preset="night" />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff0000" />
      
      <group scale={isMobile ? 0.8 : 1}>
        {activeCards.map((item, i) => (
          <ProjectCard 
            key={i} 
            index={i} 
            project={item.project} 
            position={item.position as [number, number, number]} 
            rotation={item.rotation as [number, number, number]} 
          />
        ))}
      </group>
      
      <ContactShadows 
        position={[0, -5, 0]} 
        opacity={0.6} 
        scale={20} 
        blur={2.5} 
        far={10} 
        color="#000000" 
      />
    </>
  );
}

export function ShowcaseSection() {
  return (
    <section className="relative min-h-screen bg-black py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,0,0,0.4),transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-24 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[1px] bg-red-600" />
          <span className="text-[10px] font-bold tracking-[0.8em] text-white/40 uppercase">The Project Deck</span>
          <div className="w-8 h-[1px] bg-red-600" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-[8vw] md:text-[5vw] font-black tracking-tighter leading-none uppercase mb-6"
        >
          SELECTED <span className="text-white/20 italic">ARTIFACTS</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/30 text-[10px] max-w-xl mx-auto uppercase tracking-[0.4em] leading-relaxed"
        >
          Four pillars of creative exploration. <br />
          Each a unique ritual in the void of design.
        </motion.p>
      </div>

      {/* 3D Scene */}
      <div className="relative z-10 w-full h-[60vh] md:h-[70vh]">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
