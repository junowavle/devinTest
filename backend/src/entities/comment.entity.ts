import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Reaction } from './reaction.entity';

@ObjectType('Comment')
@Entity()
export class Comment {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  content: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.comments, { eager: true, nullable: false })
  author: User;

  @Field(() => Post)
  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @Field(() => [Reaction], { nullable: true, defaultValue: [] })
  @OneToMany(() => Reaction, reaction => reaction.comment, { eager: true })
  reactions: Reaction[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
