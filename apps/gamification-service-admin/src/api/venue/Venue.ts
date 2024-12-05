import { Badge } from "../badge/Badge";
import { Transaction } from "../transaction/Transaction";

export type Venue = {
  badges?: Array<Badge>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  transactions?: Array<Transaction>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
