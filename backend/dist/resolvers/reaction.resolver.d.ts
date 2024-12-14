import { ReactionService } from '../services/reaction.service';
import { Reaction, ReactionType } from '../entities/reaction.entity';
export declare class ReactionResolver {
    private reactionService;
    constructor(reactionService: ReactionService);
    createReaction(type: ReactionType, userId: string, postId?: string, commentId?: string): Promise<Reaction>;
    postReactions(postId: string): Promise<Reaction[]>;
    commentReactions(commentId: string): Promise<Reaction[]>;
}
