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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./user.entity");
const post_entity_1 = require("./post.entity");
const comment_entity_1 = require("./comment.entity");
let Reaction = class Reaction {
};
exports.Reaction = Reaction;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reaction.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Reaction.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reaction.prototype, "targetType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reaction.prototype, "targetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_entity_1.Post, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => post_entity_1.Post, post => post.reactions, { nullable: true }),
    __metadata("design:type", post_entity_1.Post)
], Reaction.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_entity_1.Comment, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => comment_entity_1.Comment, comment => comment.reactions, { nullable: true }),
    __metadata("design:type", comment_entity_1.Comment)
], Reaction.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reaction.prototype, "reactionType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reaction.prototype, "createdAt", void 0);
exports.Reaction = Reaction = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Reaction);
//# sourceMappingURL=reaction.entity.js.map