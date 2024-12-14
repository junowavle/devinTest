import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

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

  @Field()
  @Column()
  reactionType: string; // 'like' or 'dislike'

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
