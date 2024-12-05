import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type BadgeWhereInput = {
  description?: StringNullableFilter;
  icon?: JsonFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  venue?: VenueWhereUniqueInput;
};
