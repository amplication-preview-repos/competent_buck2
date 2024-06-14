import { UserFriendWhereInput } from "./UserFriendWhereInput";
import { UserFriendOrderByInput } from "./UserFriendOrderByInput";

export type UserFriendFindManyArgs = {
  where?: UserFriendWhereInput;
  orderBy?: Array<UserFriendOrderByInput>;
  skip?: number;
  take?: number;
};
