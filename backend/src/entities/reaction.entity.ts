import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

export enum ReactionType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE'
}

registerEnumType(ReactionType, {
  name: 'ReactionType',
  description: 'The type of reaction (LIKE or DISLIKE)',
});

@ObjectType('Reaction')
@Entity()
export class Reaction {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ReactionType)
  @Column({
    type: 'enum',
    enum: ReactionType,
  })
  type: ReactionType;

  @Field(() => User)
  @ManyToOne(() => User, { eager: true })
  user: User;

  @Field(() => ID)
  @Column('uuid')
  userId: string;

  @Field(() => Post, { nullable: true })
  @ManyToOne(() => Post, post => post.reactions, { nullable: true, onDelete: 'CASCADE' })
  post?: Post;

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  postId?: string;

  @Field(() => Comment, { nullable: true })
  @ManyToOne(() => Comment, comment => comment.reactions, { nullable: true, onDelete: 'CASCADE' })
  comment?: Comment;

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  commentId?: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
