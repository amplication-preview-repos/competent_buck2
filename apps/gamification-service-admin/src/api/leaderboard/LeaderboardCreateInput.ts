import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
