import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Post])
  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @Field(() => [Comment])
  @OneToMany(() => Comment, comment => comment.author)
  comments: Comment[];
}
