import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reaction, ReactionType } from '../entities/reaction.entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private reactionRepository: Repository<Reaction>,
  ) {}

  async create(type: ReactionType, userId: string, postId?: string, commentId?: string): Promise<Reaction> {
    const reaction = this.reactionRepository.create({
      type,
      userId,
      postId,
      commentId,
    });
    return this.reactionRepository.save(reaction);
  }

  async findByPostId(postId: string): Promise<Reaction[]> {
    return this.reactionRepository.find({
      where: { postId },
      relations: ['user'],
    });
  }

  async findByCommentId(commentId: string): Promise<Reaction[]> {
    return this.reactionRepository.find({
      where: { commentId },
      relations: ['user'],
    });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.reactionRepository.delete(id);
    return result.affected > 0;
  }
}
