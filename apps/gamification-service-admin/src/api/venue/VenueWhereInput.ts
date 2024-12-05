import { BadgeListRelationFilter } from "../badge/BadgeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type VenueWhereInput = {
  badges?: BadgeListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  typeField?: "Option1";
};
