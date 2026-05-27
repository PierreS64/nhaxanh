import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const data: any = {
      ...createInvoiceDto,
      dueDate: new Date(createInvoiceDto.dueDate),
    };

    if (createInvoiceDto.issueDate) {
      data.issueDate = new Date(createInvoiceDto.issueDate);
    }

    return this.prisma.invoice.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.invoice.findMany({
      include: {
        Contract: true,
      }
    });
  }

  async findOne(id: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
      include: {
        Contract: true,
      }
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    await this.findOne(id);
    const data: any = { ...updateInvoiceDto };
    
    if (updateInvoiceDto.dueDate) {
      data.dueDate = new Date(updateInvoiceDto.dueDate);
    }
    if (updateInvoiceDto.issueDate) {
      data.issueDate = new Date(updateInvoiceDto.issueDate);
    }

    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.invoice.delete({ where: { id } });
  }
}
