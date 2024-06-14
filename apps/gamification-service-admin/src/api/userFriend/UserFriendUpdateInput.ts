import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFriendUpdateInput = {
  friend?: string | null;
  user?: UserWhereUniqueInput | null;
};
