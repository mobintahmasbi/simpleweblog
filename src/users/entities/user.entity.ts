import { IsDate, IsString } from 'class-validator';
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
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  family: string;

  @Column()
  @IsString()
  password: string;

  @Column({ unique: true })
  @IsString()
  cellphone: string;

  @Column({ default: new Date() })
  @IsDate()
  birthDate: Date;

  @Column()
  active: boolean;

  @CreateDateColumn({ default: new Date() })
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ default: new Date() })
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn({ default: new Date() })
  @IsDate()
  deletedAt: Date;
}
