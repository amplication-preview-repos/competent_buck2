import { UserFriend as TUserFriend } from "../api/userFriend/UserFriend";

export const USERFRIEND_TITLE_FIELD = "friend";

export const UserFriendTitle = (record: TUserFriend): string => {
  return record.friend?.toString() || String(record.id);
};
