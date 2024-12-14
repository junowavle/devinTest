import { OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
export declare class InitService implements OnModuleInit {
    private userService;
    private commentRepository;
    constructor(userService: UserService, commentRepository: Repository<Comment>);
    onModuleInit(): Promise<void>;
}
