import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
  @IsString()
  password: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @Column({ default: new Date() })
  @IsNotEmpty()
  @IsDate()
  birthDate: Date;

  @Column()
  @IsNotEmpty()
  active: boolean;

  @CreateDateColumn({ default: new Date() })
  @IsOptional()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ default: new Date() })
  @IsOptional()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn({ default: new Date() })
  @IsOptional()
  @IsDate()
  deletedAt: Date;
}
