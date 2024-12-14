import { Repository } from 'typeorm';
import { Reaction } from '../entities/reaction.entity';
import { User } from '../entities/user.entity';
export declare class ReactionService {
    private reactionRepository;
    constructor(reactionRepository: Repository<Reaction>);
    toggleReaction(user: User, targetType: 'post' | 'comment', targetId: number, reactionType: 'like' | 'dislike'): Promise<boolean>;
    getReactions(targetType: 'post' | 'comment', targetId: number): Promise<Reaction[]>;
}
