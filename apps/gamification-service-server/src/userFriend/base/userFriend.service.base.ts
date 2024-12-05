/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserFriend as PrismaUserFriend,
  User as PrismaUser,
} from "@prisma/client";

export class UserFriendServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserFriendCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userFriend.count(args);
  }

  async userFriends<T extends Prisma.UserFriendFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFriendFindManyArgs>
  ): Promise<PrismaUserFriend[]> {
    return this.prisma.userFriend.findMany<Prisma.UserFriendFindManyArgs>(args);
  }
  async userFriend<T extends Prisma.UserFriendFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFriendFindUniqueArgs>
  ): Promise<PrismaUserFriend | null> {
    return this.prisma.userFriend.findUnique(args);
  }
  async createUserFriend<T extends Prisma.UserFriendCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFriendCreateArgs>
  ): Promise<PrismaUserFriend> {
    return this.prisma.userFriend.create<T>(args);
  }
  async updateUserFriend<T extends Prisma.UserFriendUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFriendUpdateArgs>
  ): Promise<PrismaUserFriend> {
    return this.prisma.userFriend.update<T>(args);
  }
  async deleteUserFriend<T extends Prisma.UserFriendDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFriendDeleteArgs>
  ): Promise<PrismaUserFriend> {
    return this.prisma.userFriend.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userFriend
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
