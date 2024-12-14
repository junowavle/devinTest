import { Post } from '../entities/post.entity';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { ReactionService } from '../services/reaction.service';
import { Reaction } from '../entities/reaction.entity';
export declare class PostResolver {
    private postService;
    private userService;
    private reactionService;
    constructor(postService: PostService, userService: UserService, reactionService: ReactionService);
    posts(): Promise<Post[]>;
    post(id: number): Promise<Post>;
    reactions(post: Post): Promise<Reaction[]>;
    createPost(title: string, content: string, thumbnailUrl: string, authorId: number): Promise<Post>;
    updatePost(id: number, title?: string, content?: string, thumbnailUrl?: string): Promise<Post>;
    deletePost(id: number): Promise<boolean>;
}
