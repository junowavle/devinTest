import { User } from './user.entity';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
export declare enum ReactionType {
    LIKE = "LIKE",
    DISLIKE = "DISLIKE"
}
export declare class Reaction {
    id: string;
    type: ReactionType;
    user: User;
    userId: string;
    post?: Post;
    postId?: string;
    comment?: Comment;
    commentId?: string;
    createdAt: Date;
}
