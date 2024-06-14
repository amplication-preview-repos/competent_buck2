import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
  venue?: VenueWhereUniqueInput | null;
};
