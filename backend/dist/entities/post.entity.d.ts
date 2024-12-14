import { User } from './user.entity';
import { Comment } from './comment.entity';
import { Reaction } from './reaction.entity';
export declare class Post {
    id: string;
    title: string;
    content: string;
    thumbnailUrl: string;
    author: User;
    comments: Comment[];
    reactions: Reaction[];
    createdAt: Date;
    updatedAt: Date;
}
