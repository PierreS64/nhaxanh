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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PropertiesService = class PropertiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPropertyDto) {
        return this.prisma.property.create({
            data: {
                landlordId: createPropertyDto.landlordId,
                title: createPropertyDto.title,
                description: createPropertyDto.description || '',
                address: createPropertyDto.address,
                type: createPropertyDto.type,
                price: createPropertyDto.price,
                area: createPropertyDto.area,
                depositAmount: createPropertyDto.depositAmount,
                latitude: createPropertyDto.latitude,
                longitude: createPropertyDto.longitude,
                amenities: createPropertyDto.amenities || [],
            },
        });
    }
    async findAll() {
        return this.prisma.property.findMany({
            include: {
                User: true,
            }
        });
    }
    async findOne(id) {
        const property = await this.prisma.property.findUnique({
            where: { id },
        });
        if (!property) {
            throw new common_1.NotFoundException(`Property with ID ${id} not found`);
        }
        return property;
    }
    async update(id, updatePropertyDto) {
        await this.findOne(id);
        return this.prisma.property.update({
            where: { id },
            data: updatePropertyDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.property.delete({
            where: { id },
        });
    }
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertiesService);
//# sourceMappingURL=properties.service.js.map