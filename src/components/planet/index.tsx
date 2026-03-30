import { Orb } from "components/orb";
import type { PlanetProps } from "types/planet";

export const Planet = ({ moons = [], ...rest }: PlanetProps) => {
  return (
    <Orb {...rest}>
      {moons.map(moon => (
        <Orb key={moon.id} {...moon} />
      ))}
    </Orb>
  );
};
