/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BadgeUpdateManyWithoutUsersInput } from "./BadgeUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { UserFriendUpdateManyWithoutUsersInput } from "./UserFriendUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BadgeUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BadgeUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BadgeUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  badges?: BadgeUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeaderboardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LeaderboardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserFriendUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserFriendUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserFriendUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userFriends?: UserFriendUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
