import { IsString } from "class-validator";
import { IsBoolean, IsDate, IsNumber } from "class-validator/types/decorator/decorators";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('blog')
export class BlogEntity {

    @PrimaryGeneratedColumn()
    @IsString()
    id : string;


    @IsString()
    @Column()
    title : string ;

    @IsString()
    @Column()
    subtitle : string;

    @IsString()
    @Column()
    content : string;

    @CreateDateColumn()
    @IsDate()
    @Column()
    releaseDate : Date ;

    @IsNumber()
    @Column()
    minAge : number;

    @IsNumber()
    @Column()
    like : number ;

    @IsNumber()
    @Column()
    dislike : number;

    @IsBoolean()
    @Column()
    active : boolean;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    @DeleteDateColumn()
    deleteAt : Date;
}
