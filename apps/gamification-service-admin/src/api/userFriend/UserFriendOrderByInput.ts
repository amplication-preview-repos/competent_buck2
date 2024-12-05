import { SortOrder } from "../../util/SortOrder";

export type UserFriendOrderByInput = {
  createdAt?: SortOrder;
  friend?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
