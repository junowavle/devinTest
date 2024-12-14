import { User } from './user.entity';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
export declare class Reaction {
    id: number;
    user: User;
    targetType: string;
    targetId: number;
    post: Post;
    comment: Comment;
    reactionType: string;
    createdAt: Date;
}
