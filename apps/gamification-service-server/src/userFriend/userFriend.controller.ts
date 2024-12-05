import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFriendService } from "./userFriend.service";
import { UserFriendControllerBase } from "./base/userFriend.controller.base";

@swagger.ApiTags("userFriends")
@common.Controller("userFriends")
export class UserFriendController extends UserFriendControllerBase {
  constructor(protected readonly service: UserFriendService) {
    super(service);
  }
}
