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
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, reaction_entity_1.Reaction],
    synchronize: true,
};
exports.databaseConfig = config;
exports.default = config;
//# sourceMappingURL=database.config.js.map