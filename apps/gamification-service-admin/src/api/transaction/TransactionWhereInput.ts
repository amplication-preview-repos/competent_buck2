import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  venue?: VenueWhereUniqueInput;
};
