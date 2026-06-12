import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Prisma } from '@prisma/client';
import { PropertyQueryDto } from './dto/property-query.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(landlordId: string, createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        landlordId: landlordId,
        title: createPropertyDto.title,
        description: createPropertyDto.description,
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

  async findAll(query: PropertyQueryDto = {}) {
    const {
      page = 1,
      limit = 10,
      search,
      type,
      status,
      minPrice,
      maxPrice,
      city,
      district,
      ward,
    } = query;

    const pageNumber = Math.max(1, page);
    const limitNumber = Math.max(1, limit);
    const skip = (pageNumber - 1) * limitNumber;

    const where: Prisma.PropertyWhereInput = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (type) {
      where.type = type;
    }

    if (status) {
      where.status = status;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    const addressConditions: Prisma.PropertyWhereInput[] = [];
    if (city)
      addressConditions.push({
        address: { contains: city, mode: 'insensitive' },
      });
    if (district)
      addressConditions.push({
        address: { contains: district, mode: 'insensitive' },
      });
    if (ward)
      addressConditions.push({
        address: { contains: ward, mode: 'insensitive' },
      });

    if (addressConditions.length > 0) {
      // If there's an existing OR from search, we can just use AND to combine them
      where.AND = addressConditions;
    }

    const [data, totalCount] = await Promise.all([
      this.prisma.property.findMany({
        where,
        skip,
        take: limitNumber,
        include: {
          User: {
            select: {
              id: true,
              fullName: true,
              avatarUrl: true,
              email: true,
              phone: true,
            },
          },
          PropertyImage: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.property.count({ where }),
    ]);

    return {
      data,
      meta: {
        total: totalCount,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalCount / limitNumber),
      },
    };
  }

  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return property;
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    await this.findOne(id);

    return this.prisma.property.update({
      where: { id },
      data: updatePropertyDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.property.delete({
      where: { id },
    });
  }
}
