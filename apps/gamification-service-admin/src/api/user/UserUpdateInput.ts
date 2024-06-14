import { BadgeUpdateManyWithoutUsersInput } from "./BadgeUpdateManyWithoutUsersInput";
import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { UserFriendUpdateManyWithoutUsersInput } from "./UserFriendUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  badges?: BadgeUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  userFriends?: UserFriendUpdateManyWithoutUsersInput;
  username?: string;
};
