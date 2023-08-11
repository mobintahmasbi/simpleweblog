import { PartialType } from "@nestjs/mapped-types";
import { CommentEntity } from "../entities/comment.entity";

export class CreateCommentDto extends PartialType(CommentEntity){}
