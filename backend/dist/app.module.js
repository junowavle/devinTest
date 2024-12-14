"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const database_config_1 = require("./config/database.config");
const user_entity_1 = require("./entities/user.entity");
const post_entity_1 = require("./entities/post.entity");
const comment_entity_1 = require("./entities/comment.entity");
const user_resolver_1 = require("./resolvers/user.resolver");
const post_resolver_1 = require("./resolvers/post.resolver");
const comment_resolver_1 = require("./resolvers/comment.resolver");
const user_service_1 = require("./services/user.service");
const post_service_1 = require("./services/post.service");
const comment_service_1 = require("./services/comment.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                ...database_config_1.databaseConfig,
                keepConnectionAlive: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment]),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                playground: true,
                debug: true,
                buildSchemaOptions: {
                    orphanedTypes: [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment],
                    numberScalarMode: 'integer'
                },
                introspection: true
            }),
        ],
        providers: [
            user_resolver_1.UserResolver, post_resolver_1.PostResolver, comment_resolver_1.CommentResolver,
            user_service_1.UserService, post_service_1.PostService, comment_service_1.CommentService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map