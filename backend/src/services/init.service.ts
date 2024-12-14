import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class InitService implements OnModuleInit {
  constructor(
    private userService: UserService,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  async onModuleInit() {
    // Create test user on application startup
    const testUser = await this.userService.findOrCreateTestUser();

    // Update any comments with null authors to use test user
    await this.commentRepository
      .createQueryBuilder()
      .update()
      .set({ author: testUser })
      .where('author IS NULL')
      .execute();
  }
}
