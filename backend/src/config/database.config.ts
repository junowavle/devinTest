import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://user_xprmlirkve:7BVywdJTELL1NwrccGn1@devinapps-backend-prod.cluster-clussqewa0rh.us-west-2.rds.amazonaws.com/db_kvxtjcnxch',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // Be careful with this in production
};
