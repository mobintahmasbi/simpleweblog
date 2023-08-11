import { OmitType, PartialType } from "@nestjs/mapped-types";
import { BlogEntity } from "../entities/blog.entity";

export class CreateBlogDto extends OmitType(BlogEntity , ["id" , "title" , "subtitle", "content", ]){}
