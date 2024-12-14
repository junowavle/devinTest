import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(content: string, author: User, post: Post): Promise<Comment>;
    findByPost(postId: string): Promise<Comment[]>;
    delete(id: string): Promise<boolean>;
}
