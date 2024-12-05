import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
