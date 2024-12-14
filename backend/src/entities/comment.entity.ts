import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Reaction } from './reaction.entity';

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

  @Field(() => [Reaction])
  @OneToMany(() => Reaction, reaction => reaction.comment)
  reactions: Reaction[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
