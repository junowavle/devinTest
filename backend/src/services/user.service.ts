import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(name: string, id?: string): Promise<User> {
    const user = this.userRepository.create({ id, name });
    return this.userRepository.save(user);
  }

  async findOrCreateTestUser(): Promise<User> {
    const testUserId = '123e4567-e89b-12d3-a456-426614174000';
    const existingUser = await this.findOne(testUserId);
    if (existingUser) {
      return existingUser;
    }
    return this.create('Test User', testUserId);
  }
}
