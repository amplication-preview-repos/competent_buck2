import { BadgeListRelationFilter } from "../badge/BadgeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserFriendListRelationFilter } from "../userFriend/UserFriendListRelationFilter";

export type UserWhereInput = {
  badges?: BadgeListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaderboards?: LeaderboardListRelationFilter;
  transactions?: TransactionListRelationFilter;
  userFriends?: UserFriendListRelationFilter;
  username?: StringFilter;
};
