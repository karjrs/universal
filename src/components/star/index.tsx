import { Orb } from "components/orb";
import type { StarProps } from "types/star";

export const Star = (props: StarProps) => {
  return <Orb {...props} />;
};
