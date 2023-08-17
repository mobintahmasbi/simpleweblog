import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';

import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogEntity } from './entities/blog.entity';

@Injectable()
export class BlogService {
  save() {
    throw new Error('Method not implemented.');
  }

   constructor(
    @InjectRepository(BlogEntity)
    private blogRepository : Repository<BlogEntity>, 
   ){}

  create(createBlogDto : CreateBlogDto) {
    const blogObj = {
      ...createBlogDto,
      active: true,
      like: 0,
      dislike: 0
    }
    const newblog = this.blogRepository.create(blogObj)
    
    return this.blogRepository.save(newblog)
  }

   findAll()  {
    return  this.blogRepository.find();
  }

  findOne(id: number) {
    return this.blogRepository.findOneBy({
      id
    });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogRepository.update(id , updateBlogDto);
  }

  remove(id: number) {
    return this.blogRepository.delete(id);
  }
}
