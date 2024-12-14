import { TypeOrmModuleOptions } from '@nestjs/typeorm';
declare const config: TypeOrmModuleOptions;
export default config;
export { config as databaseConfig };
