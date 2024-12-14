import { User } from './user.entity';
import { Post } from './post.entity';
import { Reaction } from './reaction.entity';
export declare class Comment {
    id: string;
    content: string;
    author: User;
    post: Post;
    reactions: Reaction[];
    createdAt: Date;
}
