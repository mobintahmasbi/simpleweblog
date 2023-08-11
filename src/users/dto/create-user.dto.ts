import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PartialType, OmitType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class CreateUserDTO extends PartialType(OmitType(User, ['id'] as const)){}
