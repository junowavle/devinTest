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
exports.InitService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("../entities/comment.entity");
let InitService = class InitService {
    constructor(userService, commentRepository) {
        this.userService = userService;
        this.commentRepository = commentRepository;
    }
    async onModuleInit() {
        const testUser = await this.userService.findOrCreateTestUser();
        await this.commentRepository
            .createQueryBuilder()
            .update()
            .set({ author: testUser })
            .where('author IS NULL')
            .execute();
    }
};
exports.InitService = InitService;
exports.InitService = InitService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        typeorm_2.Repository])
], InitService);
//# sourceMappingURL=init.service.js.map