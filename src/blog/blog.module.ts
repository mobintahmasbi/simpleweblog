import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { UserloginGuard } from './userlogin/userlogin.guard';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports : [TypeOrmModule.forFeature([BlogEntity]), AuthModule],
  controllers: [BlogController],
  providers: [BlogService, UserloginGuard]
})
export class BlogModule {}
