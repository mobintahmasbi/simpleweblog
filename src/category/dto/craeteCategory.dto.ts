import { OmitType } from "@nestjs/mapped-types";
import { CategoryEntity } from "../entities/category.entity";

export class createCategoryDTO extends OmitType(CategoryEntity, ['id', 'active', 'createdAt', 'deletedAt', 'updatedAt'] as const) {}