import { Post } from '../entities/post.entity';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
export declare class PostResolver {
    private postService;
    private userService;
    constructor(postService: PostService, userService: UserService);
    posts(): Promise<Post[]>;
    post(id: number): Promise<Post>;
    createPost(title: string, content: string, thumbnailUrl: string, authorId: number): Promise<Post>;
    updatePost(id: number, title?: string, content?: string, thumbnailUrl?: string): Promise<Post>;
    deletePost(id: number): Promise<boolean>;
}
