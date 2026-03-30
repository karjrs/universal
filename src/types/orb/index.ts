import type { ReactNode } from "react";

export interface Orb {
  distance: number;
  speed: number;
  size: number;
  color: string;
  emissive?: string;
  intensity?: number;
}

export interface OrbProps extends Orb {
  children?: ReactNode;
}
