import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFriendServiceBase } from "./base/userFriend.service.base";

@Injectable()
export class UserFriendService extends UserFriendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
