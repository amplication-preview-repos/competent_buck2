/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserFriendService } from "../userFriend.service";
import { UserFriendCreateInput } from "./UserFriendCreateInput";
import { UserFriend } from "./UserFriend";
import { UserFriendFindManyArgs } from "./UserFriendFindManyArgs";
import { UserFriendWhereUniqueInput } from "./UserFriendWhereUniqueInput";
import { UserFriendUpdateInput } from "./UserFriendUpdateInput";

export class UserFriendControllerBase {
  constructor(protected readonly service: UserFriendService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserFriend })
  async createUserFriend(
    @common.Body() data: UserFriendCreateInput
  ): Promise<UserFriend> {
    return await this.service.createUserFriend({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        friend: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserFriend] })
  @ApiNestedQuery(UserFriendFindManyArgs)
  async userFriends(@common.Req() request: Request): Promise<UserFriend[]> {
    const args = plainToClass(UserFriendFindManyArgs, request.query);
    return this.service.userFriends({
      ...args,
      select: {
        createdAt: true,
        friend: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserFriend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userFriend(
    @common.Param() params: UserFriendWhereUniqueInput
  ): Promise<UserFriend | null> {
    const result = await this.service.userFriend({
      where: params,
      select: {
        createdAt: true,
        friend: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserFriend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserFriend(
    @common.Param() params: UserFriendWhereUniqueInput,
    @common.Body() data: UserFriendUpdateInput
  ): Promise<UserFriend | null> {
    try {
      return await this.service.updateUserFriend({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          friend: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserFriend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserFriend(
    @common.Param() params: UserFriendWhereUniqueInput
  ): Promise<UserFriend | null> {
    try {
      return await this.service.deleteUserFriend({
        where: params,
        select: {
          createdAt: true,
          friend: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
