import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { CategoryEntity } from './entities/category.entity';
import { createCategoryDTO } from './dto/craeteCategory.dto';
import { Repository } from 'typeorm';
import { FindCategoryDTO } from './dto/findCategory.dto';
import { UpdateCategoryDTO } from './dto/updateCategory.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) {}

    create(createCategorydto: createCategoryDTO) {
        return this.categoryRepository.create(createCategorydto)
    }

    find(){
        return this.categoryRepository.find()
    }

    findOne(findCategoryDTO: FindCategoryDTO){
        return this.categoryRepository.findOneBy(findCategoryDTO)
    }

    updateOne(findCategorydto: FindCategoryDTO, updateCategorydto: UpdateCategoryDTO){
        return this.categoryRepository.update(findCategorydto, updateCategorydto)
    }

    deleteOne(findCategorydto: FindCategoryDTO){
        return this.categoryRepository.delete(findCategorydto)
    }
}
