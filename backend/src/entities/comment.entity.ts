import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Post } from './post.entity';

@ObjectType()
@Entity()
export class Comment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  content: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.comments)
  author: User;

  @Field(() => Post)
  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
