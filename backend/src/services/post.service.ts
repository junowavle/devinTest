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
    return this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .select([
        'post.id',
        'post.title',
        'post.content',
        'post.thumbnailUrl',
        'post.createdAt',
        'post.updatedAt',
        'author.id',
        'author.name'
      ])
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .where('post.id = :id', { id })
      .getOne();
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

  async update(id: number, title?: string, content?: string, thumbnailUrl?: string): Promise<Post> {
    await this.postRepository.update(id, {
      ...(title && { title }),
      ...(content && { content }),
      ...(thumbnailUrl && { thumbnailUrl })
    });
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.postRepository.delete(id);
    return result.affected > 0;
  }
}
