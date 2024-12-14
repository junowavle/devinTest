import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';
import { Comment } from '../entities/comment.entity';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://user_xprmlirkve:7BVywdJTELL1NwrccGn1@devinapps-backend-prod.cluster-clussqewa0rh.us-west-2.rds.amazonaws.com/db_kvxtjcnxch',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [User, Post, Comment],
  synchronize: true, // Be careful with this in production
  dropSchema: true, // Add this to force drop and recreate tables
  logging: true, // Enable logging to help debug database issues
  cache: false,
  metadataTableName: `typeorm_metadata_${Date.now()}`, // Use timestamp to ensure unique metadata table
  maxQueryExecutionTime: 1000,
  extra: {
    max: 5,
    connectionTimeoutMillis: 3000
  }
};

export default config;
export { config as databaseConfig };
