"use client";

import React, { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  MeshDistortMaterial, 
  Sphere, 
  Environment, 
  Float,
  ContactShadows,
  PerspectiveCamera,
  Icosahedron
} from "@react-three/drei";
import * as THREE from "three";

// Fix for environment-injected props (like data-orchids-name) that clash with R3F's prop application
// R3F interprets dashes as path separators (e.g., data-orchids-name -> data.orchids.name)
if (typeof window !== "undefined") {
  const proto = THREE.Object3D.prototype as any;
  if (!proto.data) {
    Object.defineProperty(proto, "data", {
      get() {
        if (!this._data) this._data = { orchids: {} };
        return this._data;
      },
      set(v) {
        this._data = v;
      },
      configurable: true,
    });
  }
}

function Shards({ count = 20 }) {
  const shards = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.2 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    return temp;
  }, [count]);

  return (
    <group>
      {shards.map((shard, i) => (
        <Shard key={i} {...shard} />
      ))}
    </group>
  );
}

function Shard({ position, rotation, scale, speed }: any) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x += 0.01 * speed;
    ref.current.rotation.y += 0.01 * speed;
    ref.current.position.y += Math.sin(time * speed) * 0.002;
  });

  return (
    <Icosahedron ref={ref} args={[1, 0]} position={position} rotation={rotation} scale={scale}>
      <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.2} />
    </Icosahedron>
  );
}

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    const targetX = mouse.x * 2;
    const targetY = mouse.y * 2;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    
    meshRef.current.rotation.x = Math.cos(time / 4) * 0.3;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.3;
    meshRef.current.rotation.z += 0.005;
  });

  return (
    <Float speed={5} rotationIntensity={0.2} floatIntensity={1}>
      <Sphere
        ref={meshRef}
        args={[1.6, 128, 128]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#ffffff" : "#0a0a0a"}
          speed={hovered ? 6 : 3}
          distort={0.6}
          radius={1}
          metalness={1}
          roughness={0.05}
          emissive="#000000"
        />
      </Sphere>
    </Float>
  );
}

function GridBackground() {
  return (
    <group position={[0, 0, -5]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
        <planeGeometry args={[100, 100, 100, 100]} />
        <meshStandardMaterial 
          color="#222222" 
          wireframe 
          transparent 
          opacity={0.05} 
        />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 1.5, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export function Interactive3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.1} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          color="#ffffff"
        />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#444444" />
        
        <Suspense fallback={null}>
          <MorphingBlob />
          <Shards count={30} />
          <GridBackground />
          <Environment preset="night" />
          <ContactShadows 
            position={[0, -4, 0]} 
            opacity={0.3} 
            scale={20} 
            blur={3} 
            far={5} 
          />
        </Suspense>
        
        <Rig />
      </Canvas>
    </div>
  );
}
