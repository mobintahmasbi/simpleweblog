import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsBoolean, IsNumber, IsString, isBoolean } from 'class-validator'

@Entity()
export class CategoryEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    icon: string;

    @Column()
    @IsNumber()
    parentId: number;

    @Column()
    @IsBoolean()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}