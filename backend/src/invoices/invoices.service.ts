import { Injectable, NotFoundException, ForbiddenException, BadRequestException, Logger } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role, InvoiceStatus } from '@prisma/client';
import { PayosService } from '../payos/payos.service';

@Injectable()
export class InvoicesService {
  private readonly logger = new Logger(InvoicesService.name);

  constructor(
    private prisma: PrismaService,
    private payosService: PayosService
  ) {}

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

  async generatePaymentLink(id: string, userId: string, role: string) {
    const invoice = await this.findOne(id, userId, role);
    
    if (invoice.status === InvoiceStatus.PAID) {
      throw new BadRequestException('Invoice is already paid');
    }

    const orderCode = Number(String(Date.now()).slice(-6));
    const amount = Math.floor(invoice.totalAmount);
    // You can set the return and cancel URLs to your frontend domain. Example dummy ones here:
    const returnUrl = 'http://localhost:3000/payment/success';
    const cancelUrl = 'http://localhost:3000/payment/cancel';

    try {
      const paymentLink = await this.payosService.createPaymentLink(
        orderCode,
        amount,
        `Thanh toan HD ${orderCode}`,
        returnUrl,
        cancelUrl,
      );

      // We explicitly store the PayOS order code in the paymentMethod field 
      // temporarily. So when the webhook fires, we can find exactly which invoice it was.
      await this.prisma.invoice.update({
        where: { id },
        data: {
          paymentMethod: `PAYOS_${orderCode}`,
        },
      });

      return {
        checkoutUrl: paymentLink.checkoutUrl,
        qrCode: paymentLink.qrCode,
      };
    } catch (error) {
      this.logger.error('Failed to create payment link: ', error);
      throw new BadRequestException('Failed to generate payment link via PayOS');
    }
  }

  async handlePayosWebhook(webhookBody: any) {
    try {
      // 1. Verify the webhook payload (signature checksum)
      const data = await this.payosService.verifyPaymentWebhookData(webhookBody);

      if (data) {
        const orderCode = data.orderCode;
        
        // 2. Find the invoice that was linked to this PAYOS order code
        const invoice = await this.prisma.invoice.findFirst({
          where: {
            paymentMethod: `PAYOS_${orderCode}`,
            status: {
              not: InvoiceStatus.PAID
            }
          }
        });

        if (invoice) {
          // 3. Mark the invoice as PAID automatically
          await this.prisma.invoice.update({
            where: { id: invoice.id },
            data: {
              status: InvoiceStatus.PAID,
              paidAt: new Date(),
            }
          });
          this.logger.log(`Invoice ${invoice.id} successfully updated to PAID from PayOS webhook.`);
        }
      }
      return { success: true };
    } catch (error) {
      this.logger.error('PayOS Webhook Error: ', error);
      // Even if there is an error, return a 200 so PayOS marks webhook as delivered
      return { success: true }; 
    }
  }
}
