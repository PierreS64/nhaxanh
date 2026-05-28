import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateMaintenanceRequestDto } from './dto/create-maintenance-request.dto';
import { UpdateMaintenanceRequestDto } from './dto/update-maintenance-request.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role, MaintenanceStatus } from '@prisma/client';

@Injectable()
export class MaintenanceRequestsService {
  constructor(private prisma: PrismaService) {}

  async create(createMaintenanceRequestDto: CreateMaintenanceRequestDto, tenantId: string) {
    const { propertyId } = createMaintenanceRequestDto;
    
    const contract = await this.prisma.contract.findFirst({
      where: {
        tenantId,
        propertyId,
        status: 'ACTIVE',
      }
    });

    if (!contract) {
      throw new ForbiddenException('You do not have an active contract for this property');
    }

    return this.prisma.maintenanceRequest.create({
      data: {
        ...createMaintenanceRequestDto,
        tenantId,
      },
    });
  }

  async findAll(userId: string, role: string) {
    if (role === Role.TENANT) {
      return this.prisma.maintenanceRequest.findMany({
        where: { tenantId: userId },
        include: { Property: true },
      });
    } else if (role === Role.LANDLORD) {
      return this.prisma.maintenanceRequest.findMany({
        where: { Property: { landlordId: userId } },
        include: { Property: true, User: { select: { id: true, fullName: true, phone: true } } },
      });
    } else if (role === Role.ADMIN) {
      return this.prisma.maintenanceRequest.findMany({ include: { Property: true, User: true } });
    }
    return [];
  }

  async findOne(id: string, userId: string, role: string) {
    const request = await this.prisma.maintenanceRequest.findUnique({
      where: { id },
      include: { Property: true },
    });
    if (!request) throw new NotFoundException('Maintenance request not found');

    if (role === Role.TENANT && request.tenantId !== userId) throw new ForbiddenException('Access denied');
    if (role === Role.LANDLORD && request.Property.landlordId !== userId) throw new ForbiddenException('Access denied');

    return request;
  }

  async update(id: string, updateMaintenanceRequestDto: UpdateMaintenanceRequestDto, userId: string, role: string) {
    const request = await this.findOne(id, userId, role);
    if (role !== Role.ADMIN && request.Property.landlordId !== userId) throw new ForbiddenException('Access denied');

    return this.prisma.maintenanceRequest.update({
      where: { id },
      data: updateMaintenanceRequestDto,
    });
  }

  async remove(id: string, userId: string, role: string) {
    const request = await this.findOne(id, userId, role);
    if (role === Role.TENANT && request.tenantId !== userId) throw new ForbiddenException('Access denied');
    if (role === Role.LANDLORD && request.Property.landlordId !== userId) throw new ForbiddenException('Access denied');

    return this.prisma.maintenanceRequest.delete({ where: { id } });
  }

  async updateStatus(id: string, status: MaintenanceStatus, userId: string, role: string) {
    const request = await this.findOne(id, userId, role);
    if (role !== Role.ADMIN && request.Property.landlordId !== userId) throw new ForbiddenException('Only property owners can update status');

    return this.prisma.maintenanceRequest.update({
      where: { id },
      data: { status },
    });
  }
}
