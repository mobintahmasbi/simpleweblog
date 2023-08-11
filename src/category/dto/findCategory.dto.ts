import { PickType } from "@nestjs/mapped-types";
import { CategoryEntity } from "../entities/category.entity";

export class FindCategoryDTO extends PickType(CategoryEntity, ['id'] as const) {}