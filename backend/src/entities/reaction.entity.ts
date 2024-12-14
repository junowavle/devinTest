import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class Reaction {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field()
  @Column()
  targetType: string; // 'post' or 'comment'

  @Field()
  @Column()
  targetId: number;

  @Field(() => Post, { nullable: true })
  @ManyToOne(() => Post, post => post.reactions, { nullable: true })
  post: Post;

  @Field(() => Comment, { nullable: true })
  @ManyToOne(() => Comment, comment => comment.reactions, { nullable: true })
  comment: Comment;

  @Field()
  @Column()
  reactionType: string; // 'like' or 'dislike'

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
