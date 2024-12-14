import { Comment } from '../entities/comment.entity';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
export declare class CommentResolver {
    private commentService;
    private userService;
    private postService;
    constructor(commentService: CommentService, userService: UserService, postService: PostService);
    comments(postId: string): Promise<Comment[]>;
    createComment(content: string, authorId: string, postId: string): Promise<Comment>;
    deleteComment(id: string): Promise<boolean>;
}
