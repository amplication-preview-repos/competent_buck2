import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type BadgeCreateInput = {
  description?: string | null;
  icon?: InputJsonValue;
  level?: number | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  venue?: VenueWhereUniqueInput | null;
};
