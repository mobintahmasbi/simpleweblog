import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { BlogEntity } from 'src/blog/entities/blog.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  family: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @OneToMany(() => BlogEntity, (blog) => blog.user)
  blogs: BlogEntity[];

  @Column()
  @IsDateString()
  birthDate: Date;

  @Column({ default: true})
  active: boolean;

  @CreateDateColumn({ default: new Date() })
  @IsOptional()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ default: new Date() })
  @IsOptional()
  @IsDate()
  updatedAt: Date;
}
