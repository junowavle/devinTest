import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';
import { Comment } from '../entities/comment.entity';
import { Reaction } from '../entities/reaction.entity';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://user_xprmlirkve:7BVywdJTELL1NwrccGn1@devinapps-backend-prod.cluster-clussqewa0rh.us-west-2.rds.amazonaws.com/db_kvxtjcnxch',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [User, Post, Comment, Reaction],
  synchronize: true, // Be careful with this in production
  dropSchema: false, // Removed to prevent data loss
  logging: true, // Enable logging to help debug database issues
  cache: false,
  metadataTableName: 'typeorm_metadata', // Fixed metadata table name
  maxQueryExecutionTime: 1000,
  extra: {
    max: 5,
    connectionTimeoutMillis: 3000
  }
};

export default config;
export { config as databaseConfig };
