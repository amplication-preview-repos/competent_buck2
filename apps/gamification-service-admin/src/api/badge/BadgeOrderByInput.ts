import { SortOrder } from "../../util/SortOrder";

export type BadgeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  venueId?: SortOrder;
};
