import { Repository } from 'typeorm';
import { Reaction, ReactionType } from '../entities/reaction.entity';
export declare class ReactionService {
    private reactionRepository;
    constructor(reactionRepository: Repository<Reaction>);
    create(type: ReactionType, userId: string, postId?: string, commentId?: string): Promise<Reaction>;
    findByPostId(postId: string): Promise<Reaction[]>;
    findByCommentId(commentId: string): Promise<Reaction[]>;
    delete(id: string): Promise<boolean>;
}
