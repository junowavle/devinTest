import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(content: string, author: User, post: Post): Promise<Comment> {
    const comment = this.commentRepository.create({
      content,
      author,
      post
    });
    return this.commentRepository.save(comment);
  }

  async findByPost(postId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { post: { id: postId } },
      relations: ['author'],
      order: { createdAt: 'DESC' }
    });
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.commentRepository.delete(id);
    return result.affected > 0;
  }
}
