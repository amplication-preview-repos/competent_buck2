import { User } from "../user/User";
import { Venue } from "../venue/Venue";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  venue?: Venue | null;
};
