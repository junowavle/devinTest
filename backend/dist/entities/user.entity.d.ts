import { Post } from './post.entity';
import { Comment } from './comment.entity';
export declare class User {
    id: number;
    name: string;
    posts: Post[];
    comments: Comment[];
}
