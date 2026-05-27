import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyType } from '@prisma/client';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        landlordId: createPropertyDto.landlordId!,
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
        User: true, // Based on relation map 'User' -> 'landlordId'
      }
    });
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
