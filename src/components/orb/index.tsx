import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import type { OrbProps } from "types/orb";

export const Orb = ({ distance, speed, size, color, emissive, intensity, children }: OrbProps) => {
  const ref = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * speed;
  });

  return (
    <group ref={ref}>
      <mesh position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial emissive={emissive} emissiveIntensity={intensity} color={color} />
        {children}
      </mesh>
    </group>
  );
};
