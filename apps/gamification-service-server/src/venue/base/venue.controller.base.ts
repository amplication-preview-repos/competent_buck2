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
import { VenueService } from "../venue.service";
import { VenueCreateInput } from "./VenueCreateInput";
import { Venue } from "./Venue";
import { VenueFindManyArgs } from "./VenueFindManyArgs";
import { VenueWhereUniqueInput } from "./VenueWhereUniqueInput";
import { VenueUpdateInput } from "./VenueUpdateInput";

export class VenueControllerBase {
  constructor(protected readonly service: VenueService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Venue })
  async createVenue(@common.Body() data: VenueCreateInput): Promise<Venue> {
    return await this.service.createVenue({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Venue] })
  @ApiNestedQuery(VenueFindManyArgs)
  async venues(@common.Req() request: Request): Promise<Venue[]> {
    const args = plainToClass(VenueFindManyArgs, request.query);
    return this.service.venues({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async venue(
    @common.Param() params: VenueWhereUniqueInput
  ): Promise<Venue | null> {
    const result = await this.service.venue({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVenue(
    @common.Param() params: VenueWhereUniqueInput,
    @common.Body() data: VenueUpdateInput
  ): Promise<Venue | null> {
    try {
      return await this.service.updateVenue({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVenue(
    @common.Param() params: VenueWhereUniqueInput
  ): Promise<Venue | null> {
    try {
      return await this.service.deleteVenue({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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
