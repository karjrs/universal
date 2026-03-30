import type { ThreeElements } from "@react-three/fiber"

export type PlanetProps = ThreeElements["mesh"] & {
  size: [number, number, number]
}
