import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CategoryEntity } from "../entities/category.entity";

export class UpdateCategoryDTO extends PartialType(OmitType(CategoryEntity, ['id', 'updatedAt', 'createdAt', 'deletedAt', 'active'])){}

