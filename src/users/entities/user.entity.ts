import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
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

  @Column()
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
