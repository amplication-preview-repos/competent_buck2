import { Venue as TVenue } from "../api/venue/Venue";

export const VENUE_TITLE_FIELD = "id";

export const VenueTitle = (record: TVenue): string => {
  return record.id?.toString() || String(record.id);
};
