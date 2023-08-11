import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { BlogEntity } from '../entities/blog.entity';

export class UpdateBlogDto extends PartialType(OmitType(BlogEntity, ['id'] as const)) {}
