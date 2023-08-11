import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, CategoryModule, TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1380',
      database: 'simpleweblog',
      autoLoadEntities: true,
      synchronize: true,
  }),
  UsersModule,
  BlogModule,
  CommentModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
