import { PickType, OmitType } from "@nestjs/mapped-types";
import { BlogEntity } from "../entities/blog.entity";

export class CreateBlogDto extends PickType(BlogEntity , ["id" , "title" , "subtitle", "content"] as const){}
