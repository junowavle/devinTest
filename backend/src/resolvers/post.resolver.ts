import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { ReactionService } from '../services/reaction.service';
import { Reaction } from '../entities/reaction.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private reactionService: ReactionService,
  ) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postService.findOne(id);
  }

  @ResolveField(() => [Reaction])
  async reactions(@Parent() post: Post): Promise<Reaction[]> {
    return this.reactionService.getReactions('post', post.id);
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('content') content: string,
    @Args('thumbnailUrl', { nullable: true }) thumbnailUrl: string,
    @Args('authorId', { type: () => Int }) authorId: number,
  ): Promise<Post> {
    const author = await this.userService.findOne(authorId);
    return this.postService.create(title, content, thumbnailUrl, author);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('title', { nullable: true }) title?: string,
    @Args('content', { nullable: true }) content?: string,
    @Args('thumbnailUrl', { nullable: true }) thumbnailUrl?: string,
  ): Promise<Post> {
    return this.postService.update(id, title, content, thumbnailUrl);
  }

  @Mutation(() => Boolean)
  async deletePost(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.postService.delete(id);
  }
}
