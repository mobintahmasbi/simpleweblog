import { IsString } from "class-validator";
import { IsBoolean, IsDate, IsNumber } from "class-validator/types/decorator/decorators";
import { CommentEntity } from "src/comment/entities/comment.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn , OneToMany, ManyToOne} from "typeorm";

@Entity('blog')
export class BlogEntity {

    @PrimaryGeneratedColumn()
    @IsNumber()
    id : number;

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
    updateAt: Date;

    @DeleteDateColumn()
    deleteAt : Date;

    @ManyToOne( () => User , user => user.blogs)
    user : User

    @OneToMany(() => CommentEntity , blog => blog.commentss)
    blogss : CommentEntity[];
}
