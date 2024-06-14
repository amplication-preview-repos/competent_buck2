import { Badge } from "../badge/Badge";
import { Leaderboard } from "../leaderboard/Leaderboard";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { UserFriend } from "../userFriend/UserFriend";

export type User = {
  badges?: Array<Badge>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaderboards?: Array<Leaderboard>;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  userFriends?: Array<UserFriend>;
  username: string;
};
