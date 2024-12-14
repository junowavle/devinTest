import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { ReactionService } from '../services/reaction.service';
import { Reaction, ReactionType } from '../entities/reaction.entity';

@Resolver(() => Reaction)
export class ReactionResolver {
  constructor(private reactionService: ReactionService) {}

  @Mutation(() => Reaction)
  async createReaction(
    @Args('type') type: ReactionType,
    @Args('userId', { type: () => ID }) userId: string,
    @Args('postId', { type: () => ID, nullable: true }) postId?: string,
    @Args('commentId', { type: () => ID, nullable: true }) commentId?: string,
  ): Promise<Reaction> {
    return this.reactionService.create(type, userId, postId, commentId);
  }

  @Query(() => [Reaction])
  async postReactions(@Args('postId', { type: () => ID }) postId: string): Promise<Reaction[]> {
    return this.reactionService.findByPostId(postId);
  }

  @Query(() => [Reaction])
  async commentReactions(@Args('commentId', { type: () => ID }) commentId: string): Promise<Reaction[]> {
    return this.reactionService.findByCommentId(commentId);
  }
}
