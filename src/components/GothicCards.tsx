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

const CARDS = [
  { rank: "Q", suit: "♠", isRed: false, label: "QUEEN OF SPADES" },
  { rank: "A", suit: "♠", isRed: false, label: "ACE OF SPADES" },
  { rank: "Q", suit: "♥", isRed: true, label: "QUEEN OF HEARTS" },
  { rank: "A", suit: "♥", isRed: true, label: "ACE OF HEARTS" },
];

function Card({ position, rotation, index, card }: {
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  card: typeof CARDS[0];
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();
  
  useCursor(hovered);

  const accentColor = card.isRed ? "#ff0000" : "#000000";

  useFrame((state) => {
    if (!group.current) return;
    
    const targetX = (mouse.x * viewport.width) / 15;
    const targetY = (mouse.y * viewport.height) / 15;
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, position[0] + targetX * (1 + index * 0.1), 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1] + targetY * (1 + index * 0.1), 0.05);
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, rotation[0] + (mouse.y * 0.2), 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, rotation[1] + (mouse.x * 0.3), 0.05);
    
    const scale = hovered ? 1.1 : 1;
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
        <RoundedBox args={[2.8, 4.2, 0.08]} radius={0.12} smoothness={4}>
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.4} 
            metalness={0.1}
          />
        </RoundedBox>

        {hovered && (
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[3.2, 4.6]} />
            <meshBasicMaterial color="#ff0000" transparent opacity={0.2} />
          </mesh>
        )}

        <group position={[0, 0, 0.05]}>
          <group position={[0, 0.2, 0]}>
            <mesh position={[0, 0, 0]}>
              <coneGeometry args={[0.8, 1.2, 3]} />
              <meshStandardMaterial color={accentColor} wireframe />
            </mesh>
            <mesh position={[0, -0.4, 0]} rotation={[Math.PI, 0, 0]}>
              <coneGeometry args={[0.8, 0.8, 3]} />
              <meshStandardMaterial color={accentColor} wireframe />
            </mesh>
            <mesh position={[-0.3, 0.2, 0.3]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#ff0000" />
            </mesh>
            <mesh position={[0.3, 0.2, 0.3]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#ff0000" />
            </mesh>
          </group>

          {[1, -1].map((side) => (
            <group key={side} position={[side * 1.1, side * 1.8, 0]} rotation={[0, 0, side === -1 ? Math.PI : 0]}>
              <Text 
                fontSize={0.3} 
                color={accentColor} 
                anchorX="center"
                anchorY="middle"
              >
                {card.rank}
              </Text>
              <Text 
                position={[0, -0.35, 0]} 
                fontSize={0.25} 
                color={accentColor}
                anchorX="center"
                anchorY="middle"
              >
                {card.suit}
              </Text>
            </group>
          ))}

          <Text 
            position={[0, -1.6, 0]} 
            fontSize={0.08} 
            color={accentColor} 
            letterSpacing={0.5}
            opacity={0.5}
            anchorX="center"
          >
            {card.label}
          </Text>
        </group>

        <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
          <RoundedBox args={[2.8, 4.2, 0.08]} radius={0.12} smoothness={4}>
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
    { card: CARDS[0], position: [-3.8, 0.5, -2], rotation: [0.2, 0.4, 0.15] },
    { card: CARDS[1], position: [-1.3, 0, -0.5], rotation: [0.1, 0.15, 0.05] },
    { card: CARDS[2], position: [1.3, 0, -0.5], rotation: [0.1, -0.15, -0.05] },
    { card: CARDS[3], position: [3.8, 0.5, -2], rotation: [0.2, -0.4, -0.15] },
  ], []);

  const mobileCards = useMemo(() => [
    { card: CARDS[0], position: [-1.5, 1, -2], rotation: [0.2, 0.4, 0.15] },
    { card: CARDS[1], position: [-0.5, 0.5, -0.5], rotation: [0.1, 0.15, 0.05] },
    { card: CARDS[2], position: [0.5, -0.5, -0.5], rotation: [0.1, -0.15, -0.05] },
    { card: CARDS[3], position: [1.5, -1, -2], rotation: [0.2, -0.4, -0.15] },
  ], []);

  const activeCards = isMobile ? mobileCards : cards;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <Environment preset="night" />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff0000" />
      <spotLight 
        position={[0, 10, 5]} 
        intensity={2} 
        angle={0.3} 
        penumbra={1} 
        color="#ffffff" 
        castShadow 
      />
      
      <group scale={isMobile ? 0.8 : 1}>
        {activeCards.map((item, i) => (
          <Card 
            key={i} 
            index={i} 
            card={item.card} 
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

export function GothicCards() {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
