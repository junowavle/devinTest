"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv = require("dotenv");
const user_entity_1 = require("../entities/user.entity");
const post_entity_1 = require("../entities/post.entity");
const comment_entity_1 = require("../entities/comment.entity");
const reaction_entity_1 = require("../entities/reaction.entity");
dotenv.config();
const config = {
    type: 'postgres',
    url: process.env.DATABASE_URL || 'postgres://user_xprmlirkve:7BVywdJTELL1NwrccGn1@devinapps-backend-prod.cluster-clussqewa0rh.us-west-2.rds.amazonaws.com/db_kvxtjcnxch',
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, reaction_entity_1.Reaction],
    synchronize: true,
    dropSchema: false,
    logging: true,
    cache: false,
    metadataTableName: 'typeorm_metadata',
    maxQueryExecutionTime: 1000,
    extra: {
        max: 5,
        connectionTimeoutMillis: 3000
    }
};
exports.databaseConfig = config;
exports.default = config;
//# sourceMappingURL=database.config.js.map