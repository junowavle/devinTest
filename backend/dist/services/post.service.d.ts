import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    create(title: string, content: string, thumbnailUrl: string, author: User): Promise<Post>;
    update(id: number, title?: string, content?: string, thumbnailUrl?: string): Promise<Post>;
    delete(id: number): Promise<boolean>;
}
