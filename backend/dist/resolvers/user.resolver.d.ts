import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    user(id: string): Promise<User>;
    createUser(name: string): Promise<User>;
    testUser(): Promise<User>;
}
