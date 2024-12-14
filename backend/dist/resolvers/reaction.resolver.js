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
exports.ReactionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reaction_service_1 = require("../services/reaction.service");
const reaction_entity_1 = require("../entities/reaction.entity");
let ReactionResolver = class ReactionResolver {
    constructor(reactionService) {
        this.reactionService = reactionService;
    }
    async createReaction(type, userId, postId, commentId) {
        return this.reactionService.create(type, userId, postId, commentId);
    }
    async postReactions(postId) {
        return this.reactionService.findByPostId(postId);
    }
    async commentReactions(commentId) {
        return this.reactionService.findByCommentId(commentId);
    }
};
exports.ReactionResolver = ReactionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => reaction_entity_1.Reaction),
    __param(0, (0, graphql_1.Args)('type')),
    __param(1, (0, graphql_1.Args)('userId', { type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)('postId', { type: () => graphql_1.ID, nullable: true })),
    __param(3, (0, graphql_1.Args)('commentId', { type: () => graphql_1.ID, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ReactionResolver.prototype, "createReaction", null);
__decorate([
    (0, graphql_1.Query)(() => [reaction_entity_1.Reaction]),
    __param(0, (0, graphql_1.Args)('postId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionResolver.prototype, "postReactions", null);
__decorate([
    (0, graphql_1.Query)(() => [reaction_entity_1.Reaction]),
    __param(0, (0, graphql_1.Args)('commentId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionResolver.prototype, "commentReactions", null);
exports.ReactionResolver = ReactionResolver = __decorate([
    (0, graphql_1.Resolver)(() => reaction_entity_1.Reaction),
    __metadata("design:paramtypes", [reaction_service_1.ReactionService])
], ReactionResolver);
//# sourceMappingURL=reaction.resolver.js.map