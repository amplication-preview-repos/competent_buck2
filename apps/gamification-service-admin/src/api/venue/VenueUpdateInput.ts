import { BadgeUpdateManyWithoutVenuesInput } from "./BadgeUpdateManyWithoutVenuesInput";
import { TransactionUpdateManyWithoutVenuesInput } from "./TransactionUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  badges?: BadgeUpdateManyWithoutVenuesInput;
  location?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutVenuesInput;
  typeField?: "Option1" | null;
};
