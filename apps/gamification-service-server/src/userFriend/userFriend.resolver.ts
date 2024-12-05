import * as graphql from "@nestjs/graphql";
import { UserFriendResolverBase } from "./base/userFriend.resolver.base";
import { UserFriend } from "./base/UserFriend";
import { UserFriendService } from "./userFriend.service";

@graphql.Resolver(() => UserFriend)
export class UserFriendResolver extends UserFriendResolverBase {
  constructor(protected readonly service: UserFriendService) {
    super(service);
  }
}
