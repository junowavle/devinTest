import { Repository } from 'typeorm';
import { Reaction } from '../entities/reaction.entity';
import { User } from '../entities/user.entity';
export declare class ReactionService {
    private reactionRepository;
    constructor(reactionRepository: Repository<Reaction>);
    toggleReaction(user: User, targetType: string, targetId: number, reactionType: string): Promise<boolean>;
    getReactions(targetType: string, targetId: number): Promise<Reaction[]>;
}
