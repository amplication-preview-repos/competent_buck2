import { Badge as TBadge } from "../api/badge/Badge";

export const BADGE_TITLE_FIELD = "id";

export const BadgeTitle = (record: TBadge): string => {
  return record.id?.toString() || String(record.id);
};
