import { User } from './user.entity';
export declare class Reaction {
    id: number;
    user: User;
    targetType: string;
    targetId: number;
    reactionType: string;
    createdAt: Date;
}
