import { Badge as TBadge } from "../api/badge/Badge";

export const BADGE_TITLE_FIELD = "name";

export const BadgeTitle = (record: TBadge): string => {
  return record.name?.toString() || String(record.id);
};
