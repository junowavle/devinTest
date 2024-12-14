import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { databaseConfig } from './config/database.config';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { UserResolver } from './resolvers/user.resolver';
import { PostResolver } from './resolvers/post.resolver';
import { CommentResolver } from './resolvers/comment.resolver';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      keepConnectionAlive: true,
    }),
    TypeOrmModule.forFeature([User, Post, Comment]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
      buildSchemaOptions: {
        orphanedTypes: [User, Post, Comment],
        numberScalarMode: 'integer'
      },
      introspection: true
    }),
  ],
  providers: [
    UserResolver, PostResolver, CommentResolver,
    UserService, PostService, CommentService
  ],
})
export class AppModule {}
