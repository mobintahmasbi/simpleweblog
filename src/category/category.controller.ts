import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDTO } from './dto/craeteCategory.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly CategoryService: CategoryService){}

    @Get()
    getallcategory(){
        return this.CategoryService.find()
    }

    @Get(':id')
    getspeccategories(@Param() catId: string){
        return this.CategoryService.findOne({ id: +catId})
    }

    @Post()
    createcategory(@Body() createCategoryDTO: createCategoryDTO){
        return this.CategoryService.create( createCategoryDTO )
    }
}

