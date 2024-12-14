import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Comment } from '../entities/comment.entity';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private userService: UserService,
    private postService: PostService,
  ) {}

  @Query(() => [Comment])
  async comments(@Args('postId', { type: () => Int }) postId: number): Promise<Comment[]> {
    return this.commentService.findByPost(postId);
  }

  @Mutation(() => Comment)
  async createComment(
    @Args('content') content: string,
    @Args('authorId', { type: () => Int }) authorId: number,
    @Args('postId', { type: () => Int }) postId: number,
  ): Promise<Comment> {
    const author = await this.userService.findOne(authorId);
    const post = await this.postService.findOne(postId);
    return this.commentService.create(content, author, post);
  }

  @Mutation(() => Boolean)
  async deleteComment(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.commentService.delete(id);
  }
}
