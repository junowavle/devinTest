import { User } from './user.entity';
import { Comment } from './comment.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    thumbnailUrl: string;
    author: User;
    comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
}
