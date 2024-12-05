import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
