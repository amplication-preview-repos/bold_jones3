/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkerProfileExtraSkillWhereInput } from "./WorkerProfileExtraSkillWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WorkerProfileExtraSkillCountArgs {
  @ApiProperty({
    required: false,
    type: () => WorkerProfileExtraSkillWhereInput,
  })
  @Field(() => WorkerProfileExtraSkillWhereInput, { nullable: true })
  @Type(() => WorkerProfileExtraSkillWhereInput)
  where?: WorkerProfileExtraSkillWhereInput;
}

export { WorkerProfileExtraSkillCountArgs as WorkerProfileExtraSkillCountArgs };
