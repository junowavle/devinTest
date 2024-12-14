import { User } from './user.entity';
import { Post } from './post.entity';
export declare class Comment {
    id: number;
    content: string;
    author: User;
    post: Post;
    createdAt: Date;
}
