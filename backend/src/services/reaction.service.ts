import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reaction } from '../entities/reaction.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private reactionRepository: Repository<Reaction>,
  ) {}

  async toggleReaction(
    user: User,
    targetType: 'post' | 'comment',
    targetId: number,
    reactionType: 'like' | 'dislike'
  ): Promise<boolean> {
    const existingReaction = await this.reactionRepository.findOne({
      where: {
        user: { id: user.id },
        targetType,
        targetId,
        reactionType
      }
    });

    if (existingReaction) {
      await this.reactionRepository.remove(existingReaction);
      return false;
    }

    const reaction = this.reactionRepository.create({
      user,
      targetType,
      targetId,
      reactionType,
      ...(targetType === 'post' ? { post: { id: targetId } } : { comment: { id: targetId } })
    });
    await this.reactionRepository.save(reaction);
    return true;
  }

  async getReactions(targetType: 'post' | 'comment', targetId: number): Promise<Reaction[]> {
    return this.reactionRepository.find({
      where: { targetType, targetId },
      relations: ['user']
    });
  }
}
