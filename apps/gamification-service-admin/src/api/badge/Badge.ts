import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Venue } from "../venue/Venue";

export type Badge = {
  createdAt: Date;
  description: string | null;
  icon: JsonValue;
  id: string;
  level: number | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
  venue?: Venue | null;
};
