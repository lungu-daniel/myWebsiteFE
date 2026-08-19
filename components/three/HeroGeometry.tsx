"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function Icosahedron() {
  const wireRef = useRef<Mesh>(null);
  const fillRef = useRef<Mesh>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useFrame((_, delta) => {
    if (reducedMotion.current) return;
    const speed = delta * 0.15;
    if (wireRef.current) {
      wireRef.current.rotation.x += speed;
      wireRef.current.rotation.y += speed * 1.3;
    }
    if (fillRef.current) {
      fillRef.current.rotation.x += speed;
      fillRef.current.rotation.y += speed * 1.3;
    }
  });

  return (
    <group>
      <mesh ref={fillRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#7c7cff" transparent opacity={0.06} />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#7c7cff" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function HeroGeometry() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ alpha: true }}
      className="h-full w-full"
      style={{ pointerEvents: "none" }}
    >
      <Icosahedron />
    </Canvas>
  );
}
