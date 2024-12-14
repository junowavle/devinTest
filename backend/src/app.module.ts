import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { databaseConfig } from './config/database.config';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { Reaction } from './entities/reaction.entity';
import { UserResolver } from './resolvers/user.resolver';
import { PostResolver } from './resolvers/post.resolver';
import { CommentResolver } from './resolvers/comment.resolver';
import { ReactionResolver } from './resolvers/reaction.resolver';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { ReactionService } from './services/reaction.service';
import { InitService } from './services/init.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      keepConnectionAlive: true,
    }),
    TypeOrmModule.forFeature([User, Post, Comment, Reaction]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
      buildSchemaOptions: {
        orphanedTypes: [User, Post, Comment, Reaction]
      },
      introspection: true
    }),
  ],
  providers: [
    UserResolver, PostResolver, CommentResolver, ReactionResolver,
    UserService, PostService, CommentService, ReactionService,
    InitService
  ],
})
export class AppModule {}
