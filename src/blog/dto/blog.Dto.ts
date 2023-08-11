import { OmitType, PartialType } from "@nestjs/mapped-types";
import { BlogEntity } from "../entities/blog.entity";

export class BlogFindAllDTO extends PartialType(BlogEntity){};


export class BlogFindByIdDTO extends OmitType(BlogEntity , ['id']){}