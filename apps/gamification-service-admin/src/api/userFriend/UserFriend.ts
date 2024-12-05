import { User } from "../user/User";

export type UserFriend = {
  createdAt: Date;
  friend: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
