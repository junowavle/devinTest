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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("../entities/post.entity");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async findAll() {
        return this.postRepository.find({
            relations: {
                author: true,
                comments: true
            },
            select: {
                id: true,
                title: true,
                content: true,
                thumbnailUrl: true,
                createdAt: true,
                updatedAt: true,
                author: {
                    id: true,
                    name: true
                },
                comments: {
                    id: true,
                    content: true,
                    createdAt: true
                }
            },
            order: {
                createdAt: 'DESC'
            }
        });
    }
    async findOne(id) {
        return this.postRepository.findOne({
            where: { id },
            relations: {
                author: true,
                comments: true
            },
            select: {
                id: true,
                title: true,
                content: true,
                thumbnailUrl: true,
                createdAt: true,
                updatedAt: true,
                author: {
                    id: true,
                    name: true
                },
                comments: {
                    id: true,
                    content: true,
                    createdAt: true
                }
            }
        });
    }
    async create(title, content, thumbnailUrl, author) {
        const post = this.postRepository.create({
            title,
            content,
            thumbnailUrl,
            author
        });
        return this.postRepository.save(post);
    }
    async update(id, title, content, thumbnailUrl) {
        await this.postRepository.update(id, {
            ...(title && { title }),
            ...(content && { content }),
            ...(thumbnailUrl && { thumbnailUrl })
        });
        return this.findOne(id);
    }
    async delete(id) {
        const result = await this.postRepository.delete(id);
        return result.affected > 0;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
//# sourceMappingURL=post.service.js.map