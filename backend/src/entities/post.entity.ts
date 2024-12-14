import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Comment } from './comment.entity';
import { Reaction } from './reaction.entity';

@ObjectType('Post', { isAbstract: true })
@Entity()
export class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column('text')
  content: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  thumbnailUrl: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, { eager: true })
  author: User;

  @Field(() => [Comment], { nullable: true, defaultValue: [] })
  @OneToMany(() => Comment, comment => comment.post, { eager: true })
  comments: Comment[];

  @Field(() => [Reaction], { nullable: true, defaultValue: [] })
  @OneToMany(() => Reaction, reaction => reaction.post, { eager: true })
  reactions: Reaction[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
