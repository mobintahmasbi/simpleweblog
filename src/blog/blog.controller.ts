import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('/createBlog')
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get('/allBlog')
  findAll() {
    return this.blogService.findAll();
  }

  @Get('/oneBlog/:id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch('/updateblog/:id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete('/deleteblog/:id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
