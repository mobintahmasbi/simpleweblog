import { Entity, ManyToOne ,Column ,PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";
import { IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { BlogEntity } from "src/blog/entities/blog.entity";

@Entity('comment')
export class CommentEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User , commnet => commnet.users)
    comments : User

    @ManyToOne(() => BlogEntity , comment => comment.blogss)
    commentss : BlogEntity ;
    
    @Column()
    title : string;

    @Column()
    context : string ;


}
