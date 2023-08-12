import { IsString } from "class-validator";
import { IsBoolean, IsDate, IsNumber ,IsDateString} from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('blog')
export class BlogEntity {

    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    @IsString()
    title : string ;

    @Column()
    @IsString()
    subtitle : string;

    @Column()
    @IsString()
    content : string;

    @CreateDateColumn()
    @IsDateString()
    releaseDate : Date ;

    @Column()
    @IsNumber()
    minAge : number;

    @Column()
    @IsNumber()
    like : number ;

    @Column()
    @IsNumber()
    dislike : number;

    @ManyToOne(() => User, (user) => user.blogs)
    user: User;
    
    @Column()
    @IsBoolean()
    active : boolean;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt: Date;
}
