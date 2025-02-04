import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['comments', 'author'],
      order: {
        createdAt: 'DESC'
      }
    });
  }

  async findOne(id: string): Promise<Post> {
    return this.postRepository.findOne({
      where: { id },
      relations: ['comments', 'author']
    });
  }

  async create(title: string, content: string, thumbnailUrl: string, author: User): Promise<Post> {
    const post = this.postRepository.create({
      title,
      content,
      thumbnailUrl,
      author
    });
    return this.postRepository.save(post);
  }

  async update(id: string, title?: string, content?: string, thumbnailUrl?: string): Promise<Post> {
    await this.postRepository.update(id, {
      ...(title && { title }),
      ...(content && { content }),
      ...(thumbnailUrl && { thumbnailUrl })
    });
    return this.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.postRepository.delete(id);
    return result.affected > 0;
  }
}
