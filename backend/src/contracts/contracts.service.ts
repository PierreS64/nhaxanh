import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto, landlordId: string) {
    const { tenantId, propertyId, ...rest } = createContractDto;

    // Validate tenant
    const tenant = await this.prisma.user.findUnique({ where: { id: tenantId } });
    if (!tenant) throw new NotFoundException('Tenant not found');
    if (tenant.role !== Role.TENANT) throw new BadRequestException('User is not a tenant');

    // Validate property
    const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
    if (!property) throw new NotFoundException('Property not found');
    if (property.landlordId !== landlordId) throw new ForbiddenException('You do not own this property');

    return this.prisma.contract.create({
      data: {
        ...rest,
        startDate: new Date(rest.startDate),
        endDate: new Date(rest.endDate),
        tenantId,
        propertyId,
        landlordId,
      },
    });
  }

  async findAll(userId: string, role: string) {
    if (role === Role.TENANT) {
      return this.prisma.contract.findMany({
        where: { tenantId: userId },
        include: { Property: true, User_Contract_landlordIdToUser: { select: { id: true, fullName: true, email: true, phone: true } } },
      });
    } else if (role === Role.LANDLORD) {
      return this.prisma.contract.findMany({
        where: { landlordId: userId },
        include: { Property: true, User_Contract_tenantIdToUser: { select: { id: true, fullName: true, email: true, phone: true } } },
      });
    } else if (role === Role.ADMIN) {
      return this.prisma.contract.findMany({
        include: { Property: true, User_Contract_tenantIdToUser: true, User_Contract_landlordIdToUser: true },
      });
    }
    return [];
  }

  async findOne(id: string, userId: string, role: string) {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
      include: { Property: true },
    });
    if (!contract) throw new NotFoundException('Contract not found');

    if (role === Role.TENANT && contract.tenantId !== userId) throw new ForbiddenException('Access denied');
    if (role === Role.LANDLORD && contract.landlordId !== userId) throw new ForbiddenException('Access denied');

    return contract;
  }

  async update(id: string, updateContractDto: UpdateContractDto, userId: string, role: string) {
    await this.findOne(id, userId, role); // verify existence & access

    const data: any = { ...updateContractDto };
    if (data.startDate) data.startDate = new Date(data.startDate);
    if (data.endDate) data.endDate = new Date(data.endDate);

    return this.prisma.contract.update({
      where: { id },
      data,
    });
  }

  async remove(id: string, userId: string, role: string) {
    const contract = await this.findOne(id, userId, role); // verify
    if (role !== Role.ADMIN && contract.landlordId !== userId) throw new ForbiddenException('Only owner or admin can delete');
    
    return this.prisma.contract.delete({ where: { id } });
  }
}
