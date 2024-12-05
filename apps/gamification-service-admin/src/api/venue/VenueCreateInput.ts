import { BadgeCreateNestedManyWithoutVenuesInput } from "./BadgeCreateNestedManyWithoutVenuesInput";
import { TransactionCreateNestedManyWithoutVenuesInput } from "./TransactionCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  badges?: BadgeCreateNestedManyWithoutVenuesInput;
  location?: string | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutVenuesInput;
  typeField?: "Option1" | null;
};
