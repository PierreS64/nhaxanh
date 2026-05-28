import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role, InvoiceStatus } from '@prisma/client';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto, landlordId: string, role: string) {
    const { contractId, dueDate, ...rest } = createInvoiceDto;

    const contract = await this.prisma.contract.findUnique({ where: { id: contractId } });
    if (!contract) throw new NotFoundException('Contract not found');
    if (role !== Role.ADMIN && contract.landlordId !== landlordId) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.invoice.create({
      data: {
        ...rest,
        dueDate: new Date(dueDate),
        contractId,
      },
    });
  }

  async findAll(userId: string, role: string) {
    if (role === Role.TENANT) {
      return this.prisma.invoice.findMany({
        where: { Contract: { tenantId: userId } },
        include: { Contract: { include: { Property: true } } },
      });
    } else if (role === Role.LANDLORD) {
      return this.prisma.invoice.findMany({
        where: { Contract: { landlordId: userId } },
        include: { Contract: { include: { Property: true, User_Contract_tenantIdToUser: { select: { id: true, fullName: true } } } } },
      });
    } else if (role === Role.ADMIN) {
      return this.prisma.invoice.findMany({ include: { Contract: true } });
    }
    return [];
  }

  async findOne(id: string, userId: string, role: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
      include: { Contract: true },
    });
    if (!invoice) throw new NotFoundException('Invoice not found');

    if (role === Role.TENANT && invoice.Contract.tenantId !== userId) throw new ForbiddenException('Access denied');
    if (role === Role.LANDLORD && invoice.Contract.landlordId !== userId) throw new ForbiddenException('Access denied');

    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto, userId: string, role: string) {
    const invoice = await this.findOne(id, userId, role);
    if (role !== Role.ADMIN && invoice.Contract.landlordId !== userId) throw new ForbiddenException('Access denied');

    const data: any = { ...updateInvoiceDto };
    if (data.dueDate) data.dueDate = new Date(data.dueDate);

    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  async remove(id: string, userId: string, role: string) {
    const invoice = await this.findOne(id, userId, role);
    if (role !== Role.ADMIN && invoice.Contract.landlordId !== userId) throw new ForbiddenException('Access denied');

    return this.prisma.invoice.delete({ where: { id } });
  }

  async payInvoice(id: string, paymentMethod: string, userId: string, role: string) {
    const invoice = await this.findOne(id, userId, role); // Tenant paying their invoice
    if (invoice.status === InvoiceStatus.PAID) {
      throw new ForbiddenException('Invoice is already paid');
    }

    return this.prisma.invoice.update({
      where: { id },
      data: {
        status: InvoiceStatus.PAID,
        paymentMethod,
        paidAt: new Date(),
      },
    });
  }
}
