import type { Orb } from "types/orb";
import type { Identify } from "..";

export interface Planet extends Orb {}

export interface PlanetProps extends Planet {
  moons?: Identify<Planet>[];
}
