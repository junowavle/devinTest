import { Reaction } from '../entities/reaction.entity';
import { ReactionService } from '../services/reaction.service';
import { UserService } from '../services/user.service';
export declare class ReactionResolver {
    private reactionService;
    private userService;
    constructor(reactionService: ReactionService, userService: UserService);
    reactions(targetType: 'post' | 'comment', targetId: number): Promise<Reaction[]>;
    toggleReaction(userId: number, targetType: 'post' | 'comment', targetId: number, reactionType: 'like' | 'dislike'): Promise<boolean>;
}
