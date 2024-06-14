import { BadgeCreateNestedManyWithoutUsersInput } from "./BadgeCreateNestedManyWithoutUsersInput";
import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { UserFriendCreateNestedManyWithoutUsersInput } from "./UserFriendCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  badges?: BadgeCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  userFriends?: UserFriendCreateNestedManyWithoutUsersInput;
  username: string;
};
