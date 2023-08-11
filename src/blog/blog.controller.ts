import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { UserloginGuard } from './userlogin/userlogin.guard';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @UseGuards(UserloginGuard)
  create(@Body() createBlogDto: CreateBlogDto) {

    try {
       return this.blogService.create(createBlogDto);
    } catch (error) {
         throw new NotFoundException("Not found Creted Blog" , error)
    }
   
  }

  @Get()
  findAll() {

    try {
      return this.blogService.findAll();
    } catch (error) {
      throw new NotFoundException("Not found findAll Blog" ,error)
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    try {
      return this.blogService.findOne(+id);
    } catch (error) {
      throw new NotFoundException("Not found findOne Blog" , error)
    }
    
  }

  @Patch(':id')
  @UseGuards(UserloginGuard)
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {

    try {
      return this.blogService.update(+id, updateBlogDto);
    } catch (error) {
      throw new NotFoundException("Not found update Blog" ,error)
    }
    
  }

  @Delete(':id')
  @UseGuards(UserloginGuard)
  remove(@Param('id') id: string) {
    try {
      return this.blogService.remove(+id);
    } catch (error) {
      throw new NotFoundException("Not found remove Blog" , error)
    }
    
  }
}
