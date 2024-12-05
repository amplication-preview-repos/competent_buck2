import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFriendCreateInput = {
  friend?: string | null;
  user?: UserWhereUniqueInput | null;
};
