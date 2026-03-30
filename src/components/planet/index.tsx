import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import type { PlanetProps } from "./types";

export const Planet = (props: PlanetProps) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={props.size} />
      <meshPhongMaterial />
    </mesh>
  );
};
