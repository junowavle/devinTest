import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Reaction } from '../entities/reaction.entity';
import { ReactionService } from '../services/reaction.service';
import { UserService } from '../services/user.service';

@Resolver(() => Reaction)
export class ReactionResolver {
  constructor(
    private reactionService: ReactionService,
    private userService: UserService,
  ) {}

  @Query(() => [Reaction])
  async reactions(
    @Args('targetType', { type: () => String }) targetType: 'post' | 'comment',
    @Args('targetId', { type: () => Int }) targetId: number,
  ): Promise<Reaction[]> {
    return this.reactionService.getReactions(targetType, targetId);
  }

  @Mutation(() => Boolean)
  async toggleReaction(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('targetType', { type: () => String }) targetType: 'post' | 'comment',
    @Args('targetId', { type: () => Int }) targetId: number,
    @Args('reactionType', { type: () => String }) reactionType: 'like' | 'dislike',
  ): Promise<boolean> {
    const user = await this.userService.findOne(userId);
    return this.reactionService.toggleReaction(user, targetType, targetId, reactionType);
  }
}
