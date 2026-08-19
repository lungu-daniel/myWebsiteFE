"use client";

import dynamic from "next/dynamic";

const HeroGeometry = dynamic(() => import("@/components/three/HeroGeometry"), { ssr: false });

export default function HeroGeometryLoader() {
  return <HeroGeometry />;
}
