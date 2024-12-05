import { Module } from "@nestjs/common";
import { UserFriendModuleBase } from "./base/userFriend.module.base";
import { UserFriendService } from "./userFriend.service";
import { UserFriendController } from "./userFriend.controller";
import { UserFriendResolver } from "./userFriend.resolver";

@Module({
  imports: [UserFriendModuleBase],
  controllers: [UserFriendController],
  providers: [UserFriendService, UserFriendResolver],
  exports: [UserFriendService],
})
export class UserFriendModule {}
