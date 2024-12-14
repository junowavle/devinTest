import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column('text')
  content: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  thumbnailUrl: string;

  @Field(() => User)
  @ManyToOne(() => User)
  author: User;

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, comment => comment.post)
  comments?: Comment[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
