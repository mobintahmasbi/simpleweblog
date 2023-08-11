import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { BlogEntity } from "../entities/blog.entity";

export class BlogFindAllDTO extends PartialType(BlogEntity){};


export class BlogFindByIdDTO extends PickType(BlogEntity , ['id'] as const){}