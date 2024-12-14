import { Post } from '../entities/post.entity';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
export declare class PostResolver {
    private postService;
    private userService;
    constructor(postService: PostService, userService: UserService);
    posts(): Promise<Post[]>;
    post(id: string): Promise<Post>;
    createPost(title: string, content: string, thumbnailUrl: string, authorId: string): Promise<Post>;
    updatePost(id: string, title?: string, content?: string, thumbnailUrl?: string): Promise<Post>;
    deletePost(id: string): Promise<boolean>;
}
