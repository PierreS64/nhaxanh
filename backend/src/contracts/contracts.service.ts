import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto) {
    return this.prisma.contract.create({
      data: {
        ...createContractDto,
        startDate: new Date(createContractDto.startDate),
        endDate: new Date(createContractDto.endDate),
      },
    });
  }

  async findAll() {
    return this.prisma.contract.findMany({
      include: {
        Property: true,
      }
    });
  }

  async findOne(id: string) {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
      include: {
        Property: true,
      }
    });
    if (!contract) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }
    return contract;
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    await this.findOne(id);
    const data: any = { ...updateContractDto };
    
    if (updateContractDto.startDate) {
      data.startDate = new Date(updateContractDto.startDate);
    }
    if (updateContractDto.endDate) {
      data.endDate = new Date(updateContractDto.endDate);
    }

    return this.prisma.contract.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contract.delete({ where: { id } });
  }
}
