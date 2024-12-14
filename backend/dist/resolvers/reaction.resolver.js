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
const reaction_entity_1 = require("../entities/reaction.entity");
const reaction_service_1 = require("../services/reaction.service");
const user_service_1 = require("../services/user.service");
let ReactionResolver = class ReactionResolver {
    constructor(reactionService, userService) {
        this.reactionService = reactionService;
        this.userService = userService;
    }
    async reactions(targetType, targetId) {
        return this.reactionService.getReactions(targetType, targetId);
    }
    async toggleReaction(userId, targetType, targetId, reactionType) {
        const user = await this.userService.findOne(userId);
        return this.reactionService.toggleReaction(user, targetType, targetId, reactionType);
    }
};
exports.ReactionResolver = ReactionResolver;
__decorate([
    (0, graphql_1.Query)(() => [reaction_entity_1.Reaction]),
    __param(0, (0, graphql_1.Args)('targetType')),
    __param(1, (0, graphql_1.Args)('targetId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ReactionResolver.prototype, "reactions", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('userId', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('targetType')),
    __param(2, (0, graphql_1.Args)('targetId', { type: () => graphql_1.Int })),
    __param(3, (0, graphql_1.Args)('reactionType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, String]),
    __metadata("design:returntype", Promise)
], ReactionResolver.prototype, "toggleReaction", null);
exports.ReactionResolver = ReactionResolver = __decorate([
    (0, graphql_1.Resolver)(() => reaction_entity_1.Reaction),
    __metadata("design:paramtypes", [reaction_service_1.ReactionService,
        user_service_1.UserService])
], ReactionResolver);
//# sourceMappingURL=reaction.resolver.js.map