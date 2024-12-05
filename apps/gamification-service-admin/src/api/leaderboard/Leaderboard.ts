import { User } from "../user/User";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  score: number | null;
  updatedAt: Date;
  user?: User | null;
};
