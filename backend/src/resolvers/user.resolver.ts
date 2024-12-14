import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('name') name: string): Promise<User> {
    return this.userService.create(name);
  }
}
