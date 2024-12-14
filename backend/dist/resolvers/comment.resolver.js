"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const comment_entity_1 = require("../entities/comment.entity");
const comment_service_1 = require("../services/comment.service");
const user_service_1 = require("../services/user.service");
const post_service_1 = require("../services/post.service");
let CommentResolver = class CommentResolver {
    constructor(commentService, userService, postService) {
        this.commentService = commentService;
        this.userService = userService;
        this.postService = postService;
    }
    async comments(postId) {
        return this.commentService.findByPost(postId);
    }
    async createComment(content, authorId, postId) {
        const author = await this.userService.findOrCreateTestUser();
        const post = await this.postService.findOne(postId);
        return this.commentService.create(content, author, post);
    }
    async deleteComment(id) {
        return this.commentService.delete(id);
    }
};
exports.CommentResolver = CommentResolver;
__decorate([
    (0, graphql_1.Query)(() => [comment_entity_1.Comment]),
    __param(0, (0, graphql_1.Args)('postId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "comments", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_entity_1.Comment),
    __param(0, (0, graphql_1.Args)('content')),
    __param(1, (0, graphql_1.Args)('authorId', { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)('postId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "createComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "deleteComment", null);
exports.CommentResolver = CommentResolver = __decorate([
    (0, graphql_1.Resolver)(() => comment_entity_1.Comment),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        user_service_1.UserService,
        post_service_1.PostService])
], CommentResolver);
//# sourceMappingURL=comment.resolver.js.map