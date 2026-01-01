"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  PerspectiveCamera, 
  Text, 
  RoundedBox,
  useCursor,
  ContactShadows,
  Environment
} from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";

export const PROJECTS = [
  { 
    id: "smart-parking",
    rank: "Q", 
    suit: "♠", 
    isRed: false, 
    label: "QUEEN OF SPADES",
    category: "IOT PLATFORM",
    title: "SMART PARKING",
    year: "2023",
    description: "An intelligent IoT-based parking management system",
  },
  { 
    id: "fromflow",
    rank: "A", 
    suit: "♠", 
    isRed: false, 
    label: "ACE OF SPADES",
    category: "WEB SAAS",
    title: "FROMFLOW",
    year: "2024",
    description: "A modern form builder SaaS application",
  },
  { 
    id: "activity-tracker",
    rank: "Q", 
    suit: "♥", 
    isRed: true, 
    label: "QUEEN OF HEARTS",
    category: "MOBILE UTILITY",
    title: "ACTIVITY TRACKER",
    year: "2024",
    description: "Mobile app for tracking daily activities and habits",
  },
  { 
    id: "malayalam-fml",
    rank: "A", 
    suit: "♥", 
    isRed: true, 
    label: "ACE OF HEARTS",
    category: "FIGMA PLUGIN",
    title: "MALAYALAM FML",
    year: "2024",
    description: "Figma plugin for Malayalam typography and fonts",
  },
];

function Card({ position, rotation, index, card, onCardClick }: {
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  card: typeof PROJECTS[0];
  onCardClick: (id: string) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();
  
  useCursor(hovered);

  const accentColor = card.isRed ? "#dc2626" : "#3a3a3a";
  const cardBg = "#1a1a1a";
  const textColor = card.isRed ? "#dc2626" : "#888888";

  useFrame((state) => {
    if (!group.current) return;
    
    const targetX = (mouse.x * viewport.width) / 18;
    const targetY = (mouse.y * viewport.height) / 18;
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, position[0] + targetX * (0.8 + index * 0.08), 0.04);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1] + targetY * (0.8 + index * 0.08), 0.04);
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, rotation[0] + (mouse.y * 0.15), 0.04);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, rotation[1] + (mouse.x * 0.2), 0.04);
    
    const scale = hovered ? 1.08 : 1;
    group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, scale, 0.08));
  });

  const handleClick = () => {
    onCardClick(card.id);
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group 
        ref={group} 
        position={position} 
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <RoundedBox args={[2.5, 3.8, 0.06]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color={cardBg} 
            roughness={0.3} 
            metalness={0.05}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.031]}>
          <RoundedBox args={[2.35, 3.65, 0.001]} radius={0.08} smoothness={4}>
            <meshBasicMaterial color={accentColor} transparent opacity={0.6} wireframe={false} />
          </RoundedBox>
        </mesh>
        
        <mesh position={[0, 0, 0.032]}>
          <RoundedBox args={[2.3, 3.6, 0.001]} radius={0.08} smoothness={4}>
            <meshBasicMaterial color={cardBg} />
          </RoundedBox>
        </mesh>

        {hovered && (
          <mesh position={[0, 0, -0.08]}>
            <planeGeometry args={[2.9, 4.2]} />
            <meshBasicMaterial color="#dc2626" transparent opacity={0.25} />
          </mesh>
        )}

        <group position={[0, 0, 0.04]}>
          <group position={[0.85, 1.45, 0]}>
            <Text 
              fontSize={0.35} 
              color={textColor} 
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/playfairdisplay/v36/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.woff2"
            >
              {card.rank}
            </Text>
            <Text 
              position={[0, -0.35, 0]} 
              fontSize={0.25} 
              color={textColor}
              anchorX="center"
              anchorY="middle"
            >
              {card.suit}
            </Text>
          </group>

          <group position={[-0.85, -1.45, 0]} rotation={[0, 0, Math.PI]}>
            <Text 
              fontSize={0.35} 
              color={textColor} 
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/playfairdisplay/v36/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.woff2"
            >
              {card.rank}
            </Text>
            <Text 
              position={[0, -0.35, 0]} 
              fontSize={0.25} 
              color={textColor}
              anchorX="center"
              anchorY="middle"
            >
              {card.suit}
            </Text>
          </group>

          <group position={[0, 0.2, 0]}>
            <mesh>
              <octahedronGeometry args={[0.55, 0]} />
              <meshBasicMaterial color={textColor} wireframe />
            </mesh>
          </group>

          <Text 
            position={[0, -0.65, 0]}
            fontSize={0.13} 
            color={textColor}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.15}
          >
            {card.category}
          </Text>

          <Text 
            position={[0, -1.0, 0]}
            fontSize={0.22} 
            color={textColor}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/playfairdisplay/v36/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.woff2"
            letterSpacing={0.05}
          >
            {card.title}
          </Text>

          <Text 
            position={[0, -1.4, 0]}
            fontSize={0.1} 
            color={textColor}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.2}
          >
            {`EST. ${card.year}`}
          </Text>
        </group>
      </group>
    </Float>
  );
}

function Scene({ onCardClick }: { onCardClick: (id: string) => void }) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;
  
  const cards = useMemo(() => [
    { card: PROJECTS[0], position: [-3.2, 0.3, -1.5], rotation: [0.15, 0.35, 0.1] },
    { card: PROJECTS[1], position: [-1.0, -0.2, 0], rotation: [0.08, 0.12, 0.03] },
    { card: PROJECTS[2], position: [1.0, -0.2, 0], rotation: [0.08, -0.12, -0.03] },
    { card: PROJECTS[3], position: [3.2, 0.3, -1.5], rotation: [0.15, -0.35, -0.1] },
  ], []);

  const mobileCards = useMemo(() => [
    { card: PROJECTS[0], position: [-1.2, 0.8, -1.5], rotation: [0.15, 0.35, 0.1] },
    { card: PROJECTS[1], position: [-0.4, 0.3, 0], rotation: [0.08, 0.12, 0.03] },
    { card: PROJECTS[2], position: [0.4, -0.3, 0], rotation: [0.08, -0.12, -0.03] },
    { card: PROJECTS[3], position: [1.2, -0.8, -1.5], rotation: [0.15, -0.35, -0.1] },
  ], []);

  const activeCards = isMobile ? mobileCards : cards;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <Environment preset="studio" />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.8} color="#dc2626" />
      <spotLight 
        position={[0, 8, 6]} 
        intensity={1.5} 
        angle={0.4} 
        penumbra={0.8} 
        color="#ffffff" 
        castShadow 
      />
      
      <group scale={isMobile ? 0.75 : 1}>
        {activeCards.map((item, i) => (
          <Card 
            key={i} 
            index={i} 
            card={item.card} 
            position={item.position as [number, number, number]} 
            rotation={item.rotation as [number, number, number]}
            onCardClick={onCardClick}
          />
        ))}
      </group>
      
      <ContactShadows 
        position={[0, -4, 0]} 
        opacity={0.4} 
        scale={18} 
        blur={3} 
        far={8} 
        color="#000000" 
      />
    </>
  );
}

export function GothicCards() {
  const router = useRouter();
  
    const handleCardClick = (id: string) => {
      console.log("Navigating to project:", id);
      router.push(`/project/${id}`);
    };

    return (
      <div className="w-full h-full bg-transparent cursor-pointer clickable">
        <Canvas 
          dpr={[1, 2]} 
          camera={{ position: [0, 0, 10], fov: 35 }} 
          gl={{ antialias: true }}
          style={{ pointerEvents: 'auto' }}
        >
          <Scene onCardClick={handleCardClick} />
        </Canvas>
      </div>
    );

}
