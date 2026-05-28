import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto, user: any) {
    const { tenantId, propertyId, ...rest } = createContractDto;

    // 1. Fetch the Property by dto.propertyId
    const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
    
    // 2. Check if the Property exists
    if (!property) throw new NotFoundException('Property not found');
    
    // 3. Check ownership
    // By-pass check if the user is an ADMIN (optional but a good safety constraint), else strictly check landlordId
    if (user.role !== Role.ADMIN && property.landlordId !== user.id) {
      console.log('DEBUG:', { userId: user.id, landlordId: property.landlordId }); 
      throw new ForbiddenException('You do not own this property'); 
    }

    // 4. Fetch the Tenant by dto.tenantId
    const tenant = await this.prisma.user.findUnique({ where: { id: tenantId } });
    
    // 5. Check if Tenant exists and has the TENANT role
    if (!tenant || tenant.role !== 'TENANT') {
      throw new NotFoundException('Tenant not found or invalid role');
    }

    // 6. Create the contract using Prisma if all checks pass
    return this.prisma.contract.create({
      data: {
        ...rest,
        startDate: new Date(rest.startDate),
        endDate: new Date(rest.endDate),
        tenantId,
        propertyId,
        landlordId: property.landlordId, // Use the property.landlordId mapping logic
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
