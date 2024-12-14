import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(name: string, id?: string): Promise<User>;
    findOrCreateTestUser(): Promise<User>;
}
